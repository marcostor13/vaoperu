export interface ISectionsData{
  section: CSection,
  items: IItemsData[]
}

export interface IItemsData{
  item: CItem,
  subitems: CSubitem[]
}

export class CSection{
  _id?: string
  name: string = ''
  primaryItemId: string = ''
  type?: number = 0
}

export class CItem{
  _id?: string
  name: string = ''
  image: string = ''
  sectionId: string = ''
}

export class CSubitem{
  _id?: string
  name: string = ''
  image: string = ''
  itemId: string = ''
}

export class CSectionInvalid{
  name: boolean = false
  primaryItemId: boolean = false
  type?: boolean = false
}

export class CItemInvalid{
  name: boolean = false
  image: boolean = false
  sectionId: boolean = false
}

export class CSubitemInvalid{
  name: boolean = false
  image: boolean = false
  itemId: boolean = false
}


