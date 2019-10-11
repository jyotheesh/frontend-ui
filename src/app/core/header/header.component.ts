import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userid;
  showMenu = false;
  constructor(private router: Router) { }

  ngOnInit() {
    window.onscroll = function () { myFunction() };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

    if (localStorage.getItem("UserDetails") != null) {
      let localUser = localStorage.getItem("UserDetails");
      this.userid = JSON.parse(localUser).user_id;
      this.showMenu = true;
    }
    else {
      this.showMenu = false;
    }
  }
  logOut() {
    localStorage.removeItem("UserDetails");
    this.router.navigateByUrl("/login");
  }

  /*responsive mennu start*/
  navMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  /*responsive mennu end*/
}
