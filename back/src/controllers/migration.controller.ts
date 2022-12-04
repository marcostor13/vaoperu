import { Request, Response } from "express";
import { createPool } from 'mysql';
import District, { IDistrict } from "../models/district";
import ProfileProvider, { IProfileProvider } from "../models/profile-provider";
import User, { Iuser } from "../models/user";
import Url, { IUrl } from './../models/url';
import CategorySubcategoryProfile, { ICategorySubcategoryProfile } from './../models/category-subcategory-profile';
import ItemSection from "../models/item-section";
import SubitemSection from "../models/subitem-section";
import Product, { IProduct } from "../models/product";

const pool =  () => {
    return new Promise((resolve, reject) => {
        const con = createPool({
        connectionLimit: 4,
        host: 'vaoperu.com',
        user: 'mtorres',
        password: 'libido16',
        database: 'marcoapp',
        });

        con.getConnection((err, connection)=> {
            if (err) {
                return reject(err);
            }
            resolve(connection);
        });
    });
};

export const getProvider = (id:number)=>{
    if(id===1){
        return 'admin'
    }else if(id===2){
        return 'provider'
    }else if(id===3){
        return 'user'
    }else{
        return null
    }
}


export const init = async (req: Request, res: Response) => {

    const id = req.body.id
    
    try {
        const query = `
            SELECT DISTINCT 
            users.name as name, 
            users.email, 
            users.password, 
            role_user.role_id,
            companies.id as companyid, 
            companies.legalname,
            companies.comercialname,
            companies.phone1,
            companies.phone2,
            companies.address1,
            companies.address2,
            companies.ruc, 
            companies.description,
            companies.image,
            companies.facebook, 
            companies.twitter,
            companies.instagram,
            companies.google,
            companies.siteweb,
            companies.district,
            companies.lat, 
            companies.lng,
            companies.video,
            companies.enabled,
            urls.url
            FROM users 
            INNER JOIN role_user ON role_user.user_id=users.id 
            INNER JOIN companies ON companies.userid=users.id
            INNER JOIN urls ON urls.companyId=companies.id
            WHERE users.id=${id} AND role_user.role_id=2`
        const userData:any = (await execute(query))

        if(userData){
            const resp = userData[0]
            const body = {
                role: [getProvider(resp.role_id)],
                name: resp.name,
                email: resp.email,
                password: resp.password                
            }       
            //SAVE USER

            const {name, role, email, password} = body
            if (!name || !role || !email || !password){
                return res.status(400).json({
                    message: `Los datos de usuario no están completos`,
                    data:body
                })       
            }
            const user = await User.findOne({email: email})
            if(user){
                return res.status(400).json({
                    message: `El usuario ya existe`
                }) 
            }
            const newUser:Iuser = new User(body)
            const newU: any = await newUser.save()

            //SAVE PROFILE PROVIDER

            const districts: IDistrict[] = await District.find({})
            const district= districts.find(d=> d.name.toLowerCase().trim() === resp.district.toLowerCase().trim())
            let districtId = ''
            let districtName = ''
            if(district){
                districtId = district._id
                districtName = district.name
            }

            const profileProvider = {
                userid: newU._id,
                legalName: resp.legalname,
                comercialName: resp.comercialname,
                whatsapp: resp.phone1,
                phone: resp.phone1,
                addressText: resp.adrress2,
                addressMaps: resp.adrress1,
                ruc: resp.ruc,
                description: resp.description,
                image: resp.image,
                video: resp.video,
                facebook: resp .facebook,
                twitter: resp.twitter,
                instagram: resp.instagram,
                tiktok: resp.tiktok,
                email: newU.email,
                districtId,
                distrinctName: districtName,
                lat: resp.lat,                 
                lng: resp.lng,
                siteWeb: resp.siteWeb,
                delivery: false,
                onMarket: true,
                enabledProducts: true,
                enabledProductsFeatured: true,
                enabledOffers: true,
                openTime: '08:00',
                closeTime: '23:59',
                role: ''
            }

            const profile: IProfileProvider = new ProfileProvider(profileProvider)
            const newProfile = await profile.save()

            //SAVE URL

            const urlData = {
                url: resp.url.toLowerCase().trim(),
                profileProviderId:newProfile._id,
                isIndividual: false
            }

            const url: IUrl = new Url(urlData)
            const newUrl = await url.save()

            //SAVE CATEGORIES SUBCATEGORIES PROFILE

            const items = await ItemSection.find({})
            const subitems = await SubitemSection.find({})

            const query2 = `
                SELECT distinct
                categories.name as categoryName,
                companyid
                FROM category_companies
                INNER JOIN categories ON categories.id = category_companies.categoryid
                WHERE companyid = ${resp.companyid} `
            const categoriesCompanyData:any = (await execute(query2))

            const query3 = `
                SELECT distinct
                subcategories.name as subcategoryName,
                companyid
                FROM category_companies
                INNER JOIN subcategories ON subcategories.id = category_companies.subcategoryid
                WHERE companyid = ${resp.companyid} `
            const subcategoriesCompanyData:any = (await execute(query3))   
            

            categoriesCompanyData.forEach(async (c:any)=>{
                const itemSearch = items.find(item=>item.name.toLowerCase().trim() === c.categoryName.toLowerCase().trim())
                if(itemSearch){
                    const CSPData = {
                        name: itemSearch.name,
                        categorySubcategoryId: itemSearch._id,
                        type: 'item',
                        profileProviderId:newProfile._id
                    }

                    const cSProfile: ICategorySubcategoryProfile = new CategorySubcategoryProfile(CSPData)
                    await cSProfile.save()
                }
            })

            subcategoriesCompanyData.forEach(async (s:any)=>{
                const subitemSearch = subitems.find(subitem=>subitem.name.toLowerCase().trim() === s.subcategoryName.toLowerCase().trim())
                if(subitemSearch){
                    const CSPData = {
                        name: subitemSearch.name,
                        categorySubcategoryId: subitemSearch._id,
                        type: 'subitem',
                        profileProviderId:newProfile._id
                    }
                    const cSProfile: ICategorySubcategoryProfile = new CategorySubcategoryProfile(CSPData)
                    await cSProfile.save()
                }
            })     
            
            //SAVE PRODUCTS

            console.log('resp.companyid', resp.companyid)

            const query4 = `
                SELECT 
                id,
                name,
                description,
                featured,
                promotionalprice,
                price
                FROM services
                WHERE companyid = ${resp.companyid} `
            const servicesData:any = (await execute(query4))

            servicesData.forEach(async(s:any) => {

                //QUERY IMAGES
                const query5 = `
                    SELECT *
                    FROM product_images
                    WHERE productid = ${s.id} `
                const productImagesData:any = (await execute(query5))

                let images = []

                if(productImagesData){                    
                    images = productImagesData.map((p:any)=>{return p.image})
                }

                const product = {
                    name: s.name,
                    profileProviderId: newProfile._id,
                    description: s.description,
                    images: images,
                    price: parseInt(s.price) || null,
                    isFeatured: s.featured,
                    promotionalPrice: parseInt(s.promocionalprice) || null,
                    categoryId: '',
                }
                const prod: IProduct = new Product(product)
                await prod.save()                
            });

            
            
            return res.status(200).json({
                message: `Migración completada`,
                data:newUrl
            })

            


        }else{
            return res.status(500).json({
                message: `Error en userData`,
                data:userData
            })
        }


        
        
    } catch (error) {
        return res.status(500).json({
            message: `Error`,
            data:error
        })
    }


    

}


/**
 * executes SQL queries in MySQL db 
 * 
 * @param {string} query - provide a valid SQL query
 * @param {string[] | Object} params - provide the parameterized values used
 * in the query 
 */
export const execute = async <T>(query: string, params: string[] | Object = {}): Promise<T> => {
  try {
    const p:any = await pool()

    if (!p) throw new Error('Pool was not created. Ensure pool is created when running the app.');

    return new Promise<T>((resolve, reject) => {
      p.query(query, params, (error:any, results:any) => {
        if (error) reject(error);
        else resolve(results);
      });
    });

  } catch (error) {
    console.error('[mysql.connector][execute][Error]: ', error);
    throw new Error('failed to execute MySQL query');
  }
}