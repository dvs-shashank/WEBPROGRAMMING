import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.service';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() data: any;
  // flagForMessage: boolean = false;
  reviewRQ=false;
  userLogin=false;
  uname:string;
  comments:string;
  ratings: number;
  constructor(private route: ActivatedRoute,
    private cardService: CardService,
    private cartService: CartService,
    private us: UserService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.cardService.getCardsFromService().subscribe(productslist => this.data = productslist[id]);
  }

  addToCart(num: number) {
    alert("Product added to cart.")
    this.cartService.addToCartInService(num);
    if (this.us.isLoggedIn) {
      this.us.addtocart(num);
    }
    // this.flagForMessage = true;
    // window.setInterval(function() {
    //   // this will execute every 5 minutes => show the alert here
    //   var popup = document.getElementById("myPopup");
    //   popup.classList.toggle("show");
    // }, 3000);
    
  }
  updatereview() {
    var obj = {'uname': this.uname, 'comment': this.comments, 'rev': this.review};
    // this.cardService().updatereview(obj);
  }
  review(){
    this.reviewRQ=true;
  }
  reviewSubmit(){
    this.reviewRQ=false;
  }
}
