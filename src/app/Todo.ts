export class Todo{
    _id : string
    sno:number
    title:string
    desc:string
    active:boolean
    constructor(_id : string,sno:number,title:string,desc:string,active:boolean){
        this._id = _id
        this.sno = sno
        this.title = title
        this.desc = desc
        this.active = active
    }
}