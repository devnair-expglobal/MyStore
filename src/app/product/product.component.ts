import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // @Input() prod;
  // the above statement works but the the object calling should also be changed with the property name
  @Input(`prod`) product;
  // product = {
  //   name: `Buzz`,
  //   image: `https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1559244390-best-toys-2019-walking-buzz-1559244376.jpg`,
  //   des: `Buzzz The Light Year, Space Ranger superhero`,
  //   alt: `buzz toy`
  // };

  constructor(private router:Router) { }

  addToCart() {
    alert('Items added to Cart');
  }
  gotoDetails(productId){
    this.router.navigate(['product', productId]);
  }
  ngOnInit() {
  }

}
