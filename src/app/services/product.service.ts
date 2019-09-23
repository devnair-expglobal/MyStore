import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products: Product[] = [
  //   {
  //     title: `Buzz`,
  //     imageUrl: `https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1559244390-best-toys-2019-walking-buzz-1559244376.jpg`,
  //     description: `Buzzz The Light Year, Space Ranger superhero, "To Infinity and Beyond", he is the best friend of Woody.`,
  //     alt: `buzz toy`,
  //     isAvailable: true,
  //   },
  //   {
  //     title: `Rex`,
  //     // tslint:disable-next-line: max-line-length
  //     imageUrl: `https://www.thetoyshop.com/medias/539067-Primary-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMTI2OTJ8aW1hZ2UvcG5nfGltYWdlcy9oNzUvaGQ1LzkxNzAyMzMxOTY1NzQucG5nfDA3NGQzMTUzOWQxYzM0MWFhMDgxZWUyYzFjZjQ0NWU5NTY1ZTc1MmYwNGEwMzI5MzAzZjU4YWY1MzMzOGU4NWI`,
  //     // tslint:disable-next-line: max-line-length
  //     description: `Rex may look like the most fearsome dinosaur, but this green Tyrannosaurus is one of the most lovable toys of the bunch.`,
  //     alt: `rex toy`,
  //     isAvailable: false,
  //   }
  // ];



  constructor(
    private httpClient: HttpClient
  ) { }

  getProducts() {
    // return this.products;
    return this.httpClient.get(' http://localhost:3000/product ');
  }

}

