import React from "react";

export default (props) => (
  <>
    <h3 style={{ textAlign: "center" }}>Some of my past projects</h3>

    <div class="post-wrapper">
      <div>
        <div class="post">
          <img class="thumbnail" src="images/dash.jpg" />
          <div class="post-preview">
            <h6 class="post-title">Laboratory Management System</h6>
            <p class="post-intro">
              Designed built & mantained a the lab managment system for FOI
              Laboratories
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>

      <div>
        <div class="post">
          <img class="thumbnail" src="images/ecom.jpg" />
          <div class="post-preview">
            <h6 class="post-title">Online Store - CoursePost Title</h6>
            <p class="post-intro">
              Online store with paypal payments intergration and guest user
              shopping
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>

      <div>
        <div class="post">
          <img class="thumbnail" src="images/membership site.jpg" />
          <div class="post-preview">
            <h6 class="post-title">Membership Website</h6>
            <p class="post-intro">
              Modulized guide for online courses with step by step intructions
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </>
);
