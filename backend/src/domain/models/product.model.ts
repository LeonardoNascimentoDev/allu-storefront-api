export class Product {
  constructor(
    public id: number,
    public name: string,
    public category: string,
    public technical_details: string,
    public annual_value: number,
    public photos: string,
  ) {}
}
