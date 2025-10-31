---
layout: default
title: Contact Us
description: Ready for better wound care? Contact Vista Wound Specialists in Tulsa to request a consultation, refer a patient, or ask a question. We serve all of Northeast Oklahoma.
permalink: /contact-us/
---

<section
  class="breadcrumbs hero-bg"
  style="
    background-image: url('{{ site.baseurl }}/assets/img/contact-header.png');
    background-size: cover;
    /* background-position: center; */
  "
>
  <div class="container">
    <div class="row">
      <!-- Breadcrumb-Content -->
      <div class="col-lg-6 offset-lg-3 col-12">
        <div class="breadcrumb-content">
          <h4>Contact Us</h4>
          <ul class="breadcrumb-menu">
            <li>
              <a href="{{ site.baseurl }}/">Home</a
              ><i class="far fa-angle-double-right"></i>
            </li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Contact Area -->
<section class="contact-area">
  <div class="container">
    <div class="row">
      <div class="col-12 wow fadeInUp" data-wow-delay="0.2s">
        <div class="contact-inner">
          <div class="row">
            <!-- Contact Form -->
            <div class="col-lg-8 col-12">
              <form
                method="post"
                id="contact-form"
              >
                <div class="contact-form">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="form-group">
                        <input
                          type="text"
                          name="Field1"
                          id="Field1"
                          placeholder="First Name"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="form-group">
                        <input
                          type="text"
                           name="Field4"
                          id="Field4"
                          placeholder="Last Name"
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="form-group">
                        <input
                          type="tel"
                           name="Field5"
                          id="Field5"
                          placeholder="Phone Number"
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="form-group">
                        <input
                          type="email"
                           name="Field6"
                          id="Field6"
                          placeholder="Email"
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="form-group">
                        <input
                          type="text"
                          name="Field7"
                          id="Field7"
                          placeholder="City/Town"
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="form-group">
                        <select id="Field8" name="Field8"  required>
                          <option value="" disabled selected>Select Area of Need</option>
                          <option value="Diabetic Foot Ulcers">Diabetic Foot Ulcers</option>
                          <option value="Pressure Injuries (Bedsores)">Pressure Injuries (Bedsores)</option>
                          <option value="Venous Stasis Ulcers">Venous Stasis Ulcers</option>
                          <option value="Arterial Ulcers">Arterial Ulcers</option>
                          <option value="Post-Operative Wounds">Post-Operative Wounds</option>
                          <option value="Infected or Non-Healing Wounds">Infected or Non-Healing Wounds</option>
                          <option value="Radiation Wounds">Radiation Wounds</option>
                          <option value="Skin Tears">Skin Tears</option>
                          <option value="Post-Traumatic Wounds">Post-Traumatic Wounds</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="form-group">
                        <select name="Field9" id="Field9" required>
                            <option value="" disabled selected>How did you hear about us?</option>
                              <option value="Referral">Referral</option>
                              <option value="Google">Google</option>
                              <option value="Social Media">Social Media</option>
                              <option value="Other">Other</option>
                          </select>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <textarea
                          name="Field10"
                          id="Field10"
                          placeholder="Message"
                          required="required"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-12">
                    <div>
                    <label class="custom-form-privacy">
                    <input type="checkbox" class="custom-checkbox"  name="Field12" id="Field12" required="required">
                    <span>
                    By checking this box, I agree to the <a href="{{'/' | relative_url}}privacy-policy" target="_blank">Privacy Policy</a> 
                    and <a href="{{ '/terms-of-service/' | relative_url }}" target="_blank" rel="noopener">Terms of Service</a> and consent to receive text messages at the number provided. 
                    Message and data rates may apply.</span>
                    </label>
                      </div>
                    </div>
                    <div class="col-lg-6 col-12">
                      <div class="contact-theme-btn">
                        <button type="submit" class="theme-btn">
                          Send Your Message
                        </button>
                      </div>
                    </div>
                    <div class="col-12 my-2">
                      <div class="form-messege text-success"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <!-- End Contact Form -->
            <!-- Contact Details -->
            <div class="col-lg-4 col-12">
              <div
                class="contact-details"
                style="
                  background-image: url('{{ site.baseurl }}/assets/img/contact-getInTouch.png');
                "
              >
                <div class="contact-details-title">
                  <h4>Get In Touch</h4>
                </div>
                <!-- <div class="single-c-details">
                  <i class="far fa-map-marker-alt"></i>
                  <div class="single-c-content">
                    <h5>Address</h5>
                    <span>2593 Ross Street, New York, USA</span>
                  </div>
                </div> -->
                <div class="single-c-details">
                  <i class="far fa-phone"></i>
                  <a href="tel:+1(918)505-2956" >
                  <div class="single-c-content">
                    <h5>Phone</h5>
                    <span>(918) 505-2956</span>
                  </div>
                  </a>
                </div>
                 <div class="single-c-details">
                  <i class="far fa-print"></i>
                  <a href="tel:+1(918) 205-7006" >
                  <div class="single-c-content">
                    <h5>Fax</h5>
                    <span>(918) 205-7006</span>
                  </div>
                   </a>
                </div>
                <div class="single-c-details">
                  <i class="far fa-envelope"></i>
                   <a href="mailto:contact@vistawound.com" >
                  <div class="single-c-content">
                    <h5>Email</h5>
                    <span>contact@vistawound.com</span>
                  </div>
                   </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- End Contact Area -->

<section class="department-area">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 offset-lg-2 col-12">
        <div class="section-title">
          <h3>Communities Served</h3>
          <p>
            Providing expert mobile wound care to homes and facilities
            throughout Northeast Oklahoma.
          </p>
        </div>
      </div>
    </div>
    <!-- Department Details Main -->
    <div class="department-details-main">
      <div class="row">
        <div class="col-12">
          <div class="department-tab-menu d-flex justify-content-center">
            <!-- Menu Tab -->
            <ul
              class="menu-tab nav nav-tabs wow fadeInUp"
              data-bs-toggle="tab-hover"
            >
              <li class="nav-item">
                <div
                  class="animated"
                  data-bs-toggle="tab"
                  data-bs-target="#tab1"
                >
                  <i class="far fa-map-marker-alt"></i>
                  <span>Bartlesville</span>
                </div>
              </li>
              <li class="nav-item">
                <div
                  class="animated"
                  data-bs-toggle="tab"
                  data-bs-target="#tab2"
                >
                  <i class="far fa-map-marker-alt"></i>
                  <span>Bixby</span>
                </div>
              </li>
              <li class="nav-item">
                <div class="animated" data-bs-toggle="tab">
                  <i class="far fa-map-marker-alt"></i>
                  <span>Broken Arrow </span>
                </div>
              </li>
              <li class="nav-item">
                <div class="animated"  data-bs-toggle="tab">
                  <i class="far fa-map-marker-alt"></i>
                  <span>Claremore</span>
                </div>
              </li>
              <li class="nav-item">
                <div class="animated"  data-bs-toggle="tab">
                  <i class="far fa-map-marker-alt"></i>
                  <span>Sapulpa</span>
                </div>
              </li>
              <li class="nav-item">
                <div class="animated"  data-bs-toggle="tab">
                  <i class="far fa-map-marker-alt"></i>
                  <span>Glenpool</span>
                </div>
              </li>
              <li class="nav-item">
                <div class="animated"  data-bs-toggle="tab">
                  <i class="far fa-map-marker-alt"></i>
                  <span>Jenks</span>
                </div>
              </li>
              <li class="nav-item">
                <div class="animated" data-bs-toggle="tab">
                  <i class="far fa-map-marker-alt"></i>
                  <span>Muskogee</span>
                </div>
              </li>
              <li class="nav-item">
                <div class="animated" data-bs-toggle="tab">
                  <i class="far fa-map-marker-alt"></i>
                  <span>Owasso</span>
                </div>
              </li>
              <li class="nav-item">
                <div class="animated"  data-bs-toggle="tab">
                  <i class="far fa-map-marker-alt"></i>
                  <span>Sand Springs </span>
                </div>
              </li>
              <li class="nav-item">
                <div class="animated" data-bs-toggle="tab">
                  <i class="far fa-map-marker-alt"></i>
                  <span>Tulsa</span>
                </div>
              </li>
              <li class="nav-item">
                <div class="animated" data-bs-toggle="tab">
                  <i class="far fa-map-marker-alt"></i>
                  <span>And Beyond</span>
                </div>
              </li>
            </ul>
            <!-- End Menu Tab -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section
  class="news-letter-area newsletter-bg"
  style="background-image: url('{{ site.baseurl }}/assets/img/ready-to-started.png'); padding: 150px 0; background-size: cover; background-position: center; background-repeat: no-repeat;"
>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6 col-12 wow fadeInLeft" data-wow-delay="0.1s">
        <div class="news-letter-content">
          <h3>Ready to Get Started?</h3>
          <p>
            Reach out today. Our responsive team is here to coordinate care
            quickly and efficiently.
          </p>
        </div>
      </div>
      <div class="col-lg-6 col-12 wow fadeInRight" data-wow-delay="0.2s">
        <div
          class="hero-button d-flex gap-3 justify-content-lg-end justify-content-center mt-3 mt-lg-0"
        >
          <a href="mailto:contact@vistawound.com" class="theme-btn">EMAIL US</a>
          <a href="#" class="theme-btn">REQUEST A CONSULTATION</a>
        </div>
      </div>
    </div>
  </div>
</section>
