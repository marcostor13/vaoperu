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
        connectionLimit: 100,
        acquireTimeout: 300000, //30 secs
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
    const ids = "(42,48,49,50,51,52,56,57,58,59,60,61,62,63,66,67,68,69,70,71,72,74,75,76,77,78,79,80,82,83,84,85,86,87,88,90,91,92,93,94,95,96,97,98,100,101,102,103,105,106,107,108,109,111,113,281,282,283,284,286,287,288,289,290,291,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,357,358,359,360,363,364,365,366,367,368,369,370,371,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,393,394,395,396,398,399,400,414,415,416,417,418,419,420,421,464,465,472,478,479,492,493,495,511,515,516,531,579,582,589,593,600,602,603,604,605,606,607,609,611,612,613,615,616,622,626,627,628,631,634,635,637,638,641,642,643,645,646,649,651,652,654,659,660,663,667,668,670,675,676,677,678,679,681,682,683,685,686,688,689,691,694,695,696,699,700,703,705,706,709,710,711,712,713,714,715,716,717,720,721,722,723,724,725,726,727,728,729,730,731,733,734,735,736,739,740,742,743,746,747,748,749,750,751,752,753,760,761,762,764,765,768,769,770,772,774,776,777,778,779,780,781,782,783,784,785,786,787,791,792,793,794,796,797,799,801,802,803,804,806,807,808,810,813,814,815,816,818,821,823,824,825,827,828,829,830,833,834,835,836,837,838,839,840,841,844,845,847,849,850,851,852,853,854,855,857,858,859,860,861,862,863,864,865,866,870,871,872,873,874,875,876,877,878,879,881,882,883,888,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,968,969,970,973,974,975,976,977,978,979,980,981,982,984,985,986,987,991,992,995,998,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1022,1024,1025,1026,1032,1035,1036,1037,1039,1041,1044,1049,1051,1053,1057,1059,1061,1065,1069,1073,1075,1081,1083,1086,1087,1093,1094,1095,1096,1097,1099,1100,1104,1105,1106,1107,1108,1109,1111,1112,1114,1116,1117,1118,1119,1120,1122,1123,1124,1127,1128,1130,1131,1136,1137,1138,1139,1143,1144,1145,1147,1148,1151,1152,1154,1161,1162,1163,1164,1170,1174,1178,1180,1182,1183,1184,1185,1186,1192,1193,1195,1198,1199,1202,1204,1206,1216,1217,1218,1219,1220,1221,1224,1225,1226,1228,1230,1232,1237,1241,1244,1253,1254,1255,1263,1264,1265,1266,1267,1273,1274,1275,1277,1281,1282,1283,1289,1290,1291,1292,1293,1294,1296,1297,1299,1300,1301,1309,1312,1313,1314,1317,1318,1319,1320,1321,1323,1324,1325,1327,1328,1329,1330,1331,1332,1334,1335,1342,1347,1348,1349,1350,1352,1354,1361,1362,1363,1366,1367,1368,1369,1370,1373,1375,1377,1379,1381,1382,1383,1384,1393,1394,1395,1396,1397,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413,1415,1416,1417,1418,1419,1420,1421,1422,1423,1425,1426,1427,1430,1431,1432,1433,1434,1435,1436,1440,1441,1446,1447,1448,1449,1450,1452,1453,1454,1455,1456,1458,1459,1460,1461,1462,1463,1464,1465,1466,1467,1469,1471,1478,1482,1483,1516,1517,1518,1520,1527,1545,1546,1549,1550,1551,1553,1555,1556,1559,1560,1561,1564,1565,1566,1567,1568,1569,1570,1571,1572,1573,1574,1575,1576,1577,1578,1579,1580,1581,1583,1588,1590,1591,1592,1593,1594,1595,1596,1597,1598,1599,1600,1601,1602,1603,1604,1605,1606,1607,1608,1609,1610,1611,1612,1613,1614,1615,1616,1617,1618,1619,1620,1621,1622,1623,1624,1625,1626,1627,1628,1630,1632,1633,1634,1635,1636,1637,1638,1639,1640,1641,1642,1643,1644,1645,1646,1647,1648,1649,1650,1652,1653,1654,1656,1657,1659,1661,1662,1663,1664,1665,1666,1670,1671,1672,1673,1674,1676,1677,1678,1680,1681,1682,1683,1684,1685,1689,1690,1691,1692,1694,1695,1696,1697,1700,1704,1707,1708,1709,1710,1711,1714,1715,1716,1717,1719,1726,1729,1730,1731,1732,1733,1734,1735,1736,1737,1738,1739,1740,1743,1744,1745,1746,1747,1748,1751,1752,1753,1754,1755,1756,1757,1758,1759,1760,1761,1762,1763,1764,1765,1766,1768,1769,1770,1771,1773,1774,1775,1776,1777)"
    
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
            WHERE users.id IN ${ids} AND role_user.role_id=2`
        const userDatas:any = (await execute(query))

        if(userDatas){

            userDatas.forEach(async (userData:any) => {
                
                const resp = userData
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
                if(!user){
                   
                    const newUser:Iuser = new User(body)
                    const newU: any = await newUser.save()
        
                    //SAVE PROFILE PROVIDER
        
                    const districts: IDistrict[] = await District.find({})
                    const district= districts.find(d=> d?.name?.toLowerCase().trim() === resp?.district?.toLowerCase().trim())
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
                        delivery: true,
                        onMarket: true,
                        enabledProducts: true,
                        enabledProductsFeatured: true,
                        enabledOffers: true,
                        openTime: '09:00',
                        closeTime: '22:00',
                        role: ''
                    }
        
                    const profile: IProfileProvider = new ProfileProvider(profileProvider)
                    const newProfile = await profile.save()
        
                    //SAVE URL
        
                    const urlData = {
                        url: resp?.url?.toLowerCase().trim(),
                        profileProviderId:newProfile._id,
                        isIndividual: false
                    }
        
                    const url: IUrl = new Url(urlData)
                    await url.save()
        
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
                        const itemSearch = items.find(item=>item?.name?.toLowerCase().trim() === c?.categoryName?.toLowerCase().trim())
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
                        const subitemSearch = subitems.find(subitem=>subitem?.name?.toLowerCase().trim() === s?.subcategoryName?.toLowerCase().trim())
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
                }
                
                
            });

            return res.status(200).json({
                message: `Migración completada`,
                data:null
            })
            

            


        }else{
            return res.status(500).json({
                message: `Error en userData`,
                data:userDatas
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