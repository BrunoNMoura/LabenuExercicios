export class Car {
  constructor(
    private id: string,
    private model: string,
    private brand: string,
    private year: number,
    private createdAT: string
  ) {}

  public getId(): string {
    return this.id;
  }
  public getModel(): string {
    return this.model;
  }
  public getBrand(): string {
    return this.brand;
  }
  public getYear(): number {
    return this.year;
  }
  public getCreatedAt(): string {
    return this.createdAT;
  }
  public setModel(value: string): void {
    this.model = value;
  }
  public setBrand(value: string): void {
    this.brand = value;
  }
  public setYear(value: number): void {
    this.year = value;
  }
  public setCreatedAt(value: string): void {
    this.createdAT = value;
  }
}
