export interface buttonType{
    title:string,
    style?:object,
    onPress:any,
    disabled?:boolean,
}

export interface noteType{
    index: number,
	item:object
	separators:object
}

export interface noteFieldType{
    title?:string|undefined,
    description?:string|undefined
}