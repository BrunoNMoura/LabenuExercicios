export class Video {
  constructor(
    private id: string,
    private title: string,
    private timeSeconds: number,
    private createdAt: string = new Date().toISOString()
  ) {}
  getId = (): string => {
    return this.id;
  };
  getTitle = ():string => {
    return this.title;
  }
  getTimeSeconds = ():number => {
    return this.timeSeconds;
  }
  getCreatedAt = ():string => {
    return this.createdAt;
  }

  setId = (newId:string):void => {
    this.id = newId
  }

  setTitle = (newTitle:string):void => {
    this.title= newTitle
  }
  setTimeSeconds = (newTimeSeconds:number):void => {
    this.timeSeconds = newTimeSeconds
  }
}
