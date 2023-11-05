"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
     <header id="header" class="u-header u-header-left-aligned-nav">
            <div class="u-header__section">
                <!-- Topbar -->
                <div class="u-header-topbar py-2 d-none d-xl-block">
                    <div class="container">
                        <div class="d-flex align-items-center">
                            <div class="topbar-left">
                                <a href="#" class="text-gray-110 font-size-13 u-header-topbar__nav-link">Welcome to Careerlaksh-MBA Solution</a>
                            </div>
                            <div class="topbar-right ml-auto">
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                                        <a href="#" class="u-header-topbar__nav-link"><i class="ec ec-map-pointer mr-1"></i> Office Location</a>
                                    </li>
                                    <!-- LOgin front page -->
                                    <li class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                                        <!-- Account Sidebar Toggle Button -->
                                        <a id="sidebarNavToggler" href="javascript:;" role="button" class="u-header-topbar__nav-link"
                                            aria-controls="sidebarContent"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            data-unfold-event="click"
                                            data-unfold-hide-on-scroll="false"
                                            data-unfold-target="#sidebarContent"
                                            data-unfold-type="css-animation"
                                            data-unfold-animation-in="fadeInRight"
                                            data-unfold-animation-out="fadeOutRight"
                                            data-unfold-duration="500">
                                            <i class="ec ec-user mr-1"></i> Register <span class="text-gray-50">or</span> Sign in
                                        </a>
                                        <!-- End Account Sidebar Toggle Button -->
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Topbar -->

                <!-- Logo-Search-header-icons -->
                <div class="py-2 py-xl-5 bg-primary-down-lg">
                    <div class="container my-0dot5 my-xl-0">
                        <div class="row align-items-center">
                            <!-- Logo-offcanvas-menu -->
                            <div class="col-auto">
                                <!-- Nav -->
                                <nav class="navbar navbar-expand u-header__navbar py-0 justify-content-xl-between max-width-270 min-width-270">
                                    <!-- Logo -->
                                    <a class="order-1 order-xl-0 navbar-brand u-header__navbar-brand u-header__navbar-brand-center" href="https://careerlaksh.com" aria-label="Electro">
                                        <img src="assets/image/careerlaksh-mba-logo.png">
                                    </a>
                                    <!-- End Logo -->

                                    <!-- Fullscreen Toggle Button -->
                                    <button id="sidebarHeaderInvokerMenu" type="button" class="navbar-toggler d-block btn u-hamburger mr-3 mr-xl-0"
                                        aria-controls="sidebarHeader"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-unfold-event="click"
                                        data-unfold-hide-on-scroll="false"
                                        data-unfold-target="#sidebarHeader1"
                                        data-unfold-type="css-animation"
                                        data-unfold-animation-in="fadeInLeft"
                                        data-unfold-animation-out="fadeOutLeft"
                                        data-unfold-duration="500">
                                        <span id="hamburgerTriggerMenu" class="u-hamburger__box">
                                            <span class="u-hamburger__inner"></span>
                                        </span>
                                    </button>
                                    <!-- End Fullscreen Toggle Button -->
                                </nav>
                                <!-- End Nav -->

                                <!-- ========== HEADER SIDEBAR ========== -->
                                <aside id="sidebarHeader1" class="u-sidebar u-sidebar--left" aria-labelledby="sidebarHeaderInvokerMenu">
                                    <div class="u-sidebar__scroller">
                                        <div class="u-sidebar__container">
                                            <div class="u-header-sidebar__footer-offset pb-0">
                                                <!-- Toggle Button -->
                                                <div class="position-absolute top-0 right-0 z-index-2 pt-4 pr-7">
                                                    <button type="button" class="close ml-auto"
                                                        aria-controls="sidebarHeader"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        data-unfold-event="click"
                                                        data-unfold-hide-on-scroll="false"
                                                        data-unfold-target="#sidebarHeader1"
                                                        data-unfold-type="css-animation"
                                                        data-unfold-animation-in="fadeInLeft"
                                                        data-unfold-animation-out="fadeOutLeft"
                                                        data-unfold-duration="500">
                                                        <span aria-hidden="true"><i class="ec ec-close-remove text-gray-90 font-size-20"></i></span>
                                                    </button>
                                                </div>
                                                <!-- End Toggle Button -->

                                                <!-- Content -->
                                                <div class="js-scrollbar u-sidebar__body">
                                                    <div id="headerSidebarContent" class="u-sidebar__content u-header-sidebar__content">
                                                        <!-- Logo -->
                                                        <a class="d-flex ml-0 navbar-brand u-header__navbar-brand u-header__navbar-brand-vertical" href="index.php" aria-label="Electro">
                                                            <img src="assets/image/careerlaksh-mba-logo.png" width="100%">
                                                        </a>
                                                        <!-- End Logo -->

                                                        <!-- List -->
                                                        <ul id="headerSidebarList" class="u-header-collapse__nav">
                                                            <!-- Home Section -->
                                                            <li class="u-has-submenu u-header-collapse__submenu">
                                                                <a class="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="javascript:;" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="headerSidebarHomeCollapse" data-target="#headerSidebarHomeCollapse">
                                                                    HOME
                                                                </a>

                                                                <div id="headerSidebarHomeCollapse" class="collapse" data-parent="#headerSidebarContent">
                                                                    <ul id="headerSidebarHomeMenu" class="u-header-collapse__nav-list">
                                                                        <!-- End Home - v7 -->
                                                                        <!-- About -->
                                                                        <li><a class="u-header-collapse__submenu-nav-link" href="about.php">About</a></li>
                                                                        <!-- End About -->
                                                                        <!-- Contact v1 -->
                                                                        <li><a class="u-header-collapse__submenu-nav-link" href="contact.php">Contact Head Office</a></li>
                                                                        <!-- End Contact v1 -->
                                                                        <!-- Contact v2 -->
                                                                        <li><a class="u-header-collapse__submenu-nav-link" href="contact.php">Contact Pune</a></li>
                                                                       
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <!-- End Home Section -->

                                                            <!-- Shop Pages -->
                                                            <li class="u-has-submenu u-header-collapse__submenu">
                                                                <a class="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="javascript:;" data-target="#headerSidebarPagesCollapse" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="headerSidebarPagesCollapse">
                                                                India MBA
                                                                </a>

                                                                <div id="headerSidebarPagesCollapse" class="collapse" data-parent="#headerSidebarContent">
                                                                    <ul id="headerSidebarPagesMenu" class="u-header-collapse__nav-list">
                                                                        
                                                                        <!-- State MBA College -->
                                                                        <li><a class="u-header-collapse__submenu-nav-link" href="mba-college-india.php">All-Indai</a></li>
                                                                        <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-mumbai.php">Mumbai</a></li>
                                                                        <!-- State MBA College -->

                                                                        <!-- State MBA College-->
                                                                        <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-bangalore.php">Banglore</a></li>
                                                                        <!-- End State MBA College -->

                                                                        <!-- State MBA College -->
                                                                        <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-delhi.php">Delhi</a></li>
                                                                        <!-- End State MBA College -->

                                                                        <!-- Shop State MBA College-->
                                                                        <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-pune.php">Pune</a></li>
                                                                        <!-- End State MBA College -->

                                                                        <!-- State MBA College -->
                                                                        <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-kerala.php">Kerala</a></li>
                                                                        <!-- End State MBA College-->
                                                                        <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-hyderabad.php">Hyderabad</a></li>

                                                                        <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-kolkata.php">Kolkata</a></li>

                                                                        <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-chennai.php">Chennai</a></li>

                                                                        <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-maharashtra.php">Maharashtra</a></li>
                                                                        
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-andhrapradesh.php">Andhra Pradesh</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-arunachalpradesh.php">Arunachal Pradesh</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-assam.php">Assam</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-bihar.php">Bihar</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-chhattisgarh.php">Chhattisgarh</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-goa.php">Goa</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-gujarat.php">Gujarat</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-haryana.php">Haryana</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-himachalpradesh.php">Himachal Pradesh</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-jharkhand.php">Jharkhand</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-karnataka.php">Karnataka</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-kerala.php">Kerala</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-madhhyapradesh.php">Madhya Pradesh</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-maharashtra.php">Maharashtra</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-manipur.php">Manipur</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-meghalaya.php">Meghalaya</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-mizoram.php">Mizoram</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-nagaland.php">Nagaland</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-odisha.php">Odisha</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-punjab.php">Punjab</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-rajasthan.php">Rajasthan</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-sikkim.php">Sikkim</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-tamilnadu.php">Tamil Nadu</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-telangana.php">Telangana</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-tripura.php">Tripura</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-uttarakhand.php">Uttarakhand</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-uttarpradesh.php">Uttar Pradesh</a></li>
    <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-westbengal.php">West Bengal</a></li>



                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <!-- End Shop Pages -->

                                                            <!-- Product Categories -->
                                                            <li class="u-has-submenu u-header-collapse__submenu">
                                                                <a class="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="javascript:;" data-target="#headerSidebarBlogCollapse" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="headerSidebarBlogCollapse">
                                                                    Abroad MBA
                                                                </a>

                                                                <div id="headerSidebarBlogCollapse" class="collapse" data-parent="#headerSidebarContent">
                                                                    <ul id="headerSidebarBlogMenu" class="u-header-collapse__nav-list"> 
                                                                         
                                                                    </a>

                                                                    <div id="headerSidebarBlogCollapse" class="collapse" data-parent="#headerSidebarContent">
                                                                        <ul id="headerSidebarBlogMenu" class="u-header-collapse__nav-list"> 
                                                                        <li><a href="https://careerlaksh.com/mba/mba-college-in-usa.php" class="u-header-collapse__submenu-nav-link">Top MBA College in USA</a></li>
                                                                        <li><a href="https://careerlaksh.com/mba/mba-college-in-uk.php" class="u-header-collapse__submenu-nav-link">Top MBA College in UK</a></li>
                                                                        <!-- 6 Column Full width -->
                                                                        <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-canada.php">Top MBA College in Canada</a></li>
                                                                        <!-- End 6 Column Full width -->
                                                                        <li><a href="https://careerlaksh.com/mba/mba-college-in-australia.php" class="u-header-collapse__submenu-nav-link">Top MBA College in Australia</a></li>
                                                                        <li><a href="https://careerlaksh.com/mba/mba-college-in-singapore.php" class="u-header-collapse__submenu-nav-link">Top MBA College in Singapore</a></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <!-- End Product Categories -->
                                                             
                                                             <!-- Product Categories -->
                                                            <li class="u-has-submenu u-header-collapse__submenu">
                                                                <a class="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="javascript:;" data-target="#headerSidebarBlogCollapse" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="headerSidebarBlogCollapse">
                                                                    Popular courses
                                                                </a>

                                                                <div id="headerSidebarBlogCollapse" class="collapse" data-parent="#headerSidebarContent">
                                                                    <ul id="headerSidebarBlogMenu" class="u-header-collapse__nav-list"> 
                                                                        <li><a href="https://careerlaksh.com/mba/mba-college-in-abroad.php" class="u-header-collapse__submenu-nav-link">MBA/PGDM</a></li>
                                                                        <li><a href="https://careerlaksh.com/mba/mba-college-in-usa.php" class="u-header-collapse__submenu-nav-link">EXECUTIVE MBA</a></li>
                                                                        <li><a href="https://careerlaksh.com/mba/mba-college-in-uk.php" class="u-header-collapse__submenu-nav-link">DISTANCE MBA</a></li>
                                                                        <!-- 6 Column Full width -->
                                                                        <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-canada.php">PART-TIME MBA</a></li>
                                                                        <!-- End 6 Column Full width -->
                                                                        <li><a href="https://careerlaksh.com/mba/mba-college-in-australia.php" class="u-header-collapse__submenu-nav-link">Top MBA College in Australia</a></li>
                                                                        <li><a href="https://careerlaksh.com/mba/mba-college-in-singapore.php" class="u-header-collapse__submenu-nav-link">Top MBA College in Singapore</a></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <!-- End Product Categories -->
                                                            
                                                            
                                                            <!-- Blog Pages -->
                                                            <li class="u-has-submenu u-header-collapse__submenu">
                                                                <a class="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="javascript:;" data-target="#headerSidebarblogsCollapse" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="headerSidebarblogsCollapse">
                                                                    Entrance-Exam
                                                                </a>

                                                                <div id="headerSidebarblogsCollapse" class="collapse" data-parent="#headerSidebarContent">
                                                                    <ul id="headerSidebarblogsMenu" class="u-header-collapse__nav-list">
                                                                        
                                                                <li><a  href="exam-cat.php" class="u-header-collapse__submenu-nav-link" style="color:black;">CAT</a></li>
                                                                <li><a class="u-header-collapse__submenu-nav-link" href="exam-cmat.php" style="color:black;">CMAT</a></li>
                                                                <li> <a class="u-header-collapse__submenu-nav-link" href="exam-snap.php" style="color:black;">SNAP</a></li>
                                                                <li> <a class="u-header-collapse__submenu-nav-link" href="all-mba-exam.php" style="color:black;">ALL MBA EXAMS</a></li>
                                                            
                                                                <li> <a class="u-header-collapse__submenu-nav-link" href="exam-xat.php" style="color:black;">XAT</a></li>
                                                                <li> <a class="u-header-collapse__submenu-nav-link" href="exam-mat.php" style="color:black;">MAT</a></li>
                                                                <li> <a class="u-header-collapse__submenu-nav-link" href="exam-atma.php" style="color:black;">ATMA</a></li>
                                                            
                                                               <li> <a class="u-header-collapse__submenu-nav-link" href="exam-nmat.php" style="color:black;">NMAT</a></li>
                                                                <li> <a class="u-header-collapse__submenu-nav-link" href="exam-gmat.php" style="color:black;">GMAT</a></li>
                                                                <li> <a class="u-header-collapse__submenu-nav-link" href="exam-ibsat.php" style="color:black;">IBSAT</a></li>
                                                           
                                                                <li> <a class="u-header-collapse__submenu-nav-link" href="exam-kiitee.php" style="color:black;">KIITEE-MAGAMENT</a></li>
                                                                <li> <a class="u-header-collapse__submenu-nav-link" href="exam-upcet.php" style="color:black;">UPCET</a></li>
                                                                <li> <a class="u-header-collapse__submenu-nav-link" href="exam-mhcet.php" style="color:black;">MHCET</a></li>
                                                                </ul>
                                                            </div>
                                                           </li>
                                                           <p>
                                                        <li class="u-has-submenu u-header-collapse__submenu">
                                                                <a href="https://careerlaksh.com/predictors/predictors.php" style="color:black;">
                                                                    Predictors
                                                                </a>
                                                        </li></p>
                                                        <p>
                                                        <li class="u-has-submenu u-header-collapse__submenu">
                                                                <a href="https://careerlaksh.com/predictors/predictors.php" style="color:black;">
                                                                    Compare Colleges
                                                                </a>
                                                        </li></p>
                                                        <p>
                                                        <li class="u-has-submenu u-header-collapse__submenu">
                                                                <a href="https://careerlaksh.com/predictors/predictors.php" style="color:black;">
                                                                    Online Couselling
                                                                </a>
                                                        </li></p>
                                                            <!-- End Blog Pages -->
                                                        </ul>
                                                        <!-- End List -->
                                                    </div>
                                                </div>
                                                <!-- End Content -->
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                                <!-- ========== END HEADER SIDEBAR ========== -->
                            </div>

                            <!-- End Logo-offcanvas-menu -->
                            <!-- Search Bar -->
                            <div class="col d-none d-xl-block">
                                <form class="js-focus-state">
                                    <label class="sr-only" for="searchproduct">Search</label>
                                    <div class="input-group">
                                        <input autocomplete="5" type="text" id="searchCollege" class="form-control py-2 pl-5 font-size-15 border-right-0 height-40 border-width-2 rounded-left-pill border-primary" name="id" id="searchproduct-item" placeholder="MBA college" aria-label="MBA College" aria-describedby="searchProduct1" required>
                                        <div class="input-group-append">
                                            
                                            <button class="btn btn-primary height-40 py-2 px-3 rounded-right-pill" type="button" id="searchProduct1">
                                                <span class="ec ec-search font-size-24"></span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <div id="searchedCollege" class="searchedCollege"></div>
<style>

.searchedCollege{position: absolute;
    background-color: #4e6687;
    opacity: 1;
    z-index: +10000;
    max-height: 300px;
    overflow-y: auto;
    border-radius: 12px 12px 0px 0px;}
    .searchedCollege ul{padding:14px 14px 14px 40px;}
    .searchedCollege li{margin:4px 0px;}
    .searchedCollege li a{color:#fed700 !important;}
</style>



                            </div>
                            <!-- End Search Bar -->
                            <!-- Header Icons -->
                            <div class="col col-xl-auto text-right text-xl-left pl-0 pl-xl-3 position-static">
                                <div class="d-inline-flex">
                                    <ul class="d-flex list-unstyled mb-0 align-items-center">
                                        <!-- Search -->
                                        <li class="col d-xl-none px-2 px-sm-3 position-static">
                                            <a id="searchClassicInvoker" class="font-size-22 text-gray-90 text-lh-1 btn-text-secondary" href="javascript:;" role="button"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Search"
                                                aria-controls="searchClassic"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                data-unfold-target="#searchClassic"
                                                data-unfold-type="css-animation"
                                                data-unfold-duration="300"
                                                data-unfold-delay="300"
                                                data-unfold-hide-on-scroll="true"
                                                data-unfold-animation-in="slideInUp"
                                                data-unfold-animation-out="fadeOut">
                                                <span class="ec ec-search"></span>
                                            </a>

                                            <!-- Input -->
                                            <div id="searchClassic" class="dropdown-menu dropdown-unfold dropdown-menu-right left-0 mx-2" aria-labelledby="searchClassicInvoker">
                                                <form class="js-focus-state input-group px-3">
                                                    <input class="form-control" type="search" placeholder="Search MBA College">
                                                    <div class="input-group-append">
                                                        <button class="btn btn-primary px-3" type="button"><i class="font-size-18 ec ec-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                            <!-- End Input -->
                                        </li>
                                        <!-- End Search -->
                                        <li class="col d-none d-xl-block"><a href="https://careerlaksh.com/mba/index.php" class="text-gray-90" data-toggle="tooltip" data-placement="top" title="MBA in Abroad"><i class="font-size-22 ec ec-compare"></i></a></li>
                                        <li class="col d-none d-xl-block"><a href="https://careerlaksh.com/mba/index.php" class="text-gray-90" data-toggle="tooltip" data-placement="top" title="MBA in India"><i class="font-size-22 ec ec-favorites"></i></a></li>
                                        <li class="col d-xl-none px-2 px-sm-3"><a href="https://careerlaksh.com/mba/index.php" class="text-gray-90" data-toggle="tooltip" data-placement="top" title="Blogs"><i class="font-size-22 ec ec-user"></i></a></li>
                                        <li class="col pr-xl-0 px-2 px-sm-3">
                                            <a href="https://careerlaksh.com/mba/index.php" class="text-gray-90 position-relative d-flex " data-toggle="tooltip" data-placement="top" title="MBA-Admission">
                                                
                                                <span class="d-none d-xl-block font-weight-bold font-size-16 text-gray-90 ml-3">Success result</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- End Header Icons -->
                        </div>
                    </div>
                </div>
                <!-- End Logo-Search-header-icons -->

                <!-- Primary-menu-wide -->
                <div class="d-none d-xl-block bg-primary">
                    <div class="container">
                        <div class="min-height-45">
                            <!-- Nav -->
                            <nav class="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--wide u-header__navbar--no-space">
                                <!-- Navigation -->
                                <div id="navBar" class="collapse navbar-collapse u-header__navbar-collapse">
                                    <ul class="navbar-nav u-header__navbar-nav">
                                        <!-- Home -->
                                        <li class="nav-item hs-has-mega-menu u-header__nav-item"
                                            data-event="hover"
                                            data-animation-in="slideInUp"
                                            data-animation-out="fadeOut"
                                            data-position="left">
                                            <a id="homeMegaMenu" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="index.php">Home</a>
                                        </li>
                                        <!-- End Home -->

                                        <!-- TV & Audio -->
                                        <li class="nav-item hs-has-mega-menu u-header__nav-item"
                                            data-event="hover"
                                            data-animation-in="slideInUp"
                                            data-animation-out="fadeOut">
                                            <a id="TVMegaMenu" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">India MBA</a>

                                            <!-- TV & Audio - Mega Menu -->
                                            <div class="hs-mega-menu w-100 u-header__sub-menu" aria-labelledby="TVMegaMenu">
                                                <div class="row u-header__mega-menu-wrapper">
                                                    <div class="col-md-3">
                                                        <span class="u-header__sub-menu-title">Top MBA College</span>
                                                        <ul class="u-header__sub-menu-nav-group mb-3">
                                                            <li><a href="https://careerlaksh.com/mba/mba-college-india.php" class="nav-link u-header__sub-menu-nav-link">Top Rank MBA College in India</a></li>
                                                            <li><a href="https://careerlaksh.com/mba/mba-college-in-delhi.php" class="nav-link u-header__sub-menu-nav-link">Top Rank MBA College in Delhi</a></li>
                                                            <li><a href="https://careerlaksh.com/mba/mba-college-in-bangalore.php" class="nav-link u-header__sub-menu-nav-link">Top Rank MBA College in Bangalore</a></li>
                                                            <li><a href="https://careerlaksh.com/mba/mba-college-in-mumbai.php" class="nav-link u-header__sub-menu-nav-link">Top Rank MBA College in Mumbai</a></li>
                                                            <li><a href="https://careerlaksh.com/mba/mba-college-in-pune.php" class="nav-link u-header__sub-menu-nav-link">Top Rank MBA College in Pune</a></li>
                                                            <li><a href="https://careerlaksh.com/mba/mba-college-in-hyderabad.php" class="nav-link u-header__sub-menu-nav-link">Top Rank MBA College in Hyderabad</a></li>
                                                            <li><a href="https://careerlaksh.com/mba/mba-college-in-kolkata.php" class="nav-link u-header__sub-menu-nav-link">Top Rank MBA College in Kolkata</a></li>
                                                            <li><a href="https://careerlaksh.com/mba/mba-college-in-chennai.php" class="nav-link u-header__sub-menu-nav-link">Top Rank MBA College in Chennai</a></li>
                                                            <li><a href="https://careerlaksh.com/mba/mba-college-in-kerala.php" class="nav-link u-header__sub-menu-nav-link">Top Rank MBA College in Kerala</a></li>
                                                            <li><a href="https://careerlaksh.com/mba/mba-college-in-maharashtra.php" class="nav-link u-header__sub-menu-nav-link">Top Rank MBA College in Maharashtra</a></li>
                                                        </ul>
                                                        
                                                    </div>
                                                   <!--  <div class="col-md-3">
                                                        <span class="u-header__sub-menu-title">Top PVT MBA College</span>
                                                        <ul class="u-header__sub-menu-nav-group mb-3">
                                                            <li><a href="https://careerlaksh.com/mba/mba-college-india.php" class="nav-link u-header__sub-menu-nav-link">Top Rank MBA College in India</a></li>
                                                            <li><a href="pvt-mba-college-in-delhi.php" class="nav-link u-header__sub-menu-nav-link">Top Rank MBA College in Delhi</a></li>
                                                            <li><a href="pvt-mba-college-in-bangalore.php" class="nav-link u-header__sub-menu-nav-link">Top Rank MBA College in Bangalore</a></li>
                                                            <li><a href="pvt-mba-college-in-mumbai.php" class="nav-link u-header__sub-menu-nav-link">Top Rank MBA College in Mumbai</a></li>
                                                            <li><a href="pvt-mba-college-in-pune.php" class="nav-link u-header__sub-menu-nav-link">Top Rank MBA College in Pune</a></li>
                                                            <li><a href="pvt-mba-college-in-hyderabad.php" class="nav-link u-header__sub-menu-nav-link">Top Rank MBA College in Hyderabad</a></li>
                                                            <li><a href="pvt-mba-college-in-kolkata.php" class="nav-link u-header__sub-menu-nav-link">Top Rank MBA College in Kolkata</a></li>
                                                            <li><a href="pvt-mba-college-in-chennai.php" class="nav-link u-header__sub-menu-nav-link">Top Rank MBA College in Chennai</a></li>
                                                            <li><a href="pvt-mba-college-in-kerala.php" class="nav-link u-header__sub-menu-nav-link">Top Rank MBA College in Kerala</a></li>
                                                            <li><a href="pvt-mba-college-in-maharastra.php" class="nav-link u-header__sub-menu-nav-link">Top Rank MBA College in Maharashtra</a></li>
                                                        </ul>
                                                     </div>   -->
                                                    <div class="col-md-3">
                                                        <span class="u-header__sub-menu-title">Top MBA College in Abroad</span>
                                                        <ul id="headerSidebarBlogMenu" class="u-header-collapse__nav-list">
                                                                        <li><a href="https://careerlaksh.com/mba/mba-college-in-abroad.php" class="u-header-collapse__submenu-nav-link">Top MBA College in Abroad</a></li>
                                                                        <li><a href="https://careerlaksh.com/mba/mba-college-in-usa.php" class="u-header-collapse__submenu-nav-link">Top MBA College in USA</a></li>
                                                                        <li><a href="https://careerlaksh.com/mba/mba-college-in-uk.php" class="u-header-collapse__submenu-nav-link">Top MBA College in UK</a></li>
                                                                        <!-- 6 Column Full width -->
                                                                        <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba/mba-college-in-canada.php">Top MBA College in Canada</a></li>
                                                                        <!-- End 6 Column Full width -->
                                                                        <li><a href="https://careerlaksh.com/mba/mba-college-in-australia.php" class="u-header-collapse__submenu-nav-link">Top MBA College in Australia</a></li>
                                                                        <li><a href="https://careerlaksh.com/mba/mba-college-in-singapore.php" class="u-header-collapse__submenu-nav-link">Top MBA College in Singapore</a></li>
                                                                    </ul>
                                                        
                                                    </div>
                                                    <div class="col-md-3">
                                                        <a href="#" class="d-block mb-3">
                                                            <img class="img-fluid" src="assets/image/careerlaksh-mba-college-banner-b.png" alt="assets/image/careerlaksh-mba-college-banner-image">
                                                            <img class="img-fluid" src="assets/image/careerlaksh-mba-college-banner-b.png" alt="assets/image/careerlaksh-mba-college-banner-image">
                                                        </a>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- End TV & Audio - Mega Menu -->
                                        </li>
                                        <!-- End Pages -->

                                        <!-- Smart Phones -->
                                        <li class="nav-item hs-has-mega-menu u-header__nav-item"
                                            data-event="hover"
                                            data-animation-in="slideInUp"
                                            data-animation-out="fadeOut">
                                            <a id="smartphonesMegaMenu" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Popular Courses</a>

                                            <!-- Smart Phones - Mega Menu -->
                                            <div class="hs-mega-menu w-100 u-header__sub-menu" aria-labelledby="smartphonesMegaMenu">
                                                <div class="row u-header__mega-menu-wrapper">
                                                    <div class="col-md-8">
                                                        <div class="row">
                                                            <div class="col-md-3">
                                                                <span class="u-header__sub-menu-title">MBA More Courses</span>
                                                                <ul id="headerSidebarBlogMenu" class="u-header-collapse__nav-list">
                                                                        
                                                                        <li><a href="https://careerlaksh.com/mba" class="u-header-collapse__submenu-nav-link">MBA/PGDM</a></li>
                                                                        <li><a href="https://careerlaksh.com/mba" class="u-header-collapse__submenu-nav-link">EXECUTIVE MBA</a></li>
                                                                        <li><a href="https://careerlaksh.com/mba" class="u-header-collapse__submenu-nav-link">DISTANCE MBA</a></li>
                                                                        <!-- 6 Column Full width -->
                                                                        <li><a class="u-header-collapse__submenu-nav-link" href="https://careerlaksh.com/mba">ONLINE MBA</a></li>
                                                                        
                                                                        <li><a href="https://careerlaksh.com/mba" class="u-header-collapse__submenu-nav-link">PART-TIME MBA</a></li>
                                                                        
                                                                 </ul>
                                                            
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <a href="#" class="d-block">
                                                            <img class="img-fluid" src="assets/image/careerlaksh-mba-college-banner-b.png" alt="assets/image/careerlaksh-mba-college-banner-image">
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- End Smart Phones - Mega Menu -->
                                        </li>
                                        <!-- End Blog -->

                                        <!-- Laptops & Desktops -->
                                        <li class="nav-item hs-has-mega-menu u-header__nav-item"
                                            data-event="hover"
                                            data-animation-in="slideInUp"
                                            data-animation-out="fadeOut">
                                            <a id="laptopsdesktopsMegaMenu" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Entrance-Exam</a>

                                            <!-- Laptops & Desktops - Mega Menu -->
                                            <div class="hs-mega-menu w-100 u-header__sub-menu" aria-labelledby="laptopsdesktopsMegaMenu">
                                                <div class="row u-header__mega-menu-wrapper">
                                                    <div class="col-md-8">
                                                        <div class="row">
                                                            <div class="col-md-3">
                                                                <span class="u-header__sub-menu-title"><a href="exam-cat.php" style="color:black;">CAT</a></span>
                                                                <span class="u-header__sub-menu-title"><a href="exam-cmat.php" style="color:black;">CMAT</a></span>
                                                                <span class="u-header__sub-menu-title"><a href="exam-snap.php" style="color:black;">SNAP</a></span>
                                                                <span class="u-header__sub-menu-title"><a href="all-mba-exam.php" style="color:black;">ALL MBA EXAMS</a></span>
                                                            </div>
                                                            <div class="col-md-3">
                                                                <span class="u-header__sub-menu-title"><a href="exam-xat.php" style="color:black;">XAT</a></span>
                                                                <span class="u-header__sub-menu-title"><a href="exam-mat.php" style="color:black;">MAT</a></span>
                                                                <span class="u-header__sub-menu-title"><a href="exam-atma.php" style="color:black;">ATMA</a></span>
                                                            
                                                            </div>
                                                            <div class="col-md-3">
                                                                <span class="u-header__sub-menu-title"><a href="exam-nmat.php" style="color:black;">NMAT</a></span>
                                                                <span class="u-header__sub-menu-title"><a href="exam-gmat.php" style="color:black;">GMAT</a></span>
                                                                <span class="u-header__sub-menu-title"><a href="exam-ibsat.php" style="color:black;">IBSAT</a></span>
                                                            </div>
                                                            <div class="col-md-3">
                                                                <span class="u-header__sub-menu-title"><a href="exam-kiitee.php" style="color:black;">KIITEE-MAGAMENT</a></span>
                                                                <span class="u-header__sub-menu-title"><a href="exam-upcet.php" style="color:black;">UPCET</a></span>
                                                                <span class="u-header__sub-menu-title"><a href="exam-mhcet.php" style="color:black;">MHCET</a></span>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <a href="#" class="d-block">
                                                            <img class="img-fluid" src="assets/image/careerlaksh-mba-college-banner-b.png" alt="assets/image/careerlaksh-mba-college-banner-image">
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- End Laptops & Desktops - Mega Menu -->
                                        </li>
                                        <!-- End Laptops & Desktops -->

                                        <!-- Gadgets -->
                                        <li class="nav-item hs-has-mega-menu u-header__nav-item"
                                            data-event="hover"
                                            data-animation-in="slideInUp"
                                            data-animation-out="fadeOut">
                                            <a id="GadgetsMegaMenu" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Predictors</a>

                                            

                                        <!-- GPS & Car -->
                                        <li class="nav-item hs-has-mega-menu u-header__nav-item"
                                            data-event="hover"
                                            data-animation-in="slideInUp"
                                            data-animation-out="fadeOut">
                                            <a id="GPSCarMegaMenu" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Resources</a>

                                            <!-- GPS & Car - Mega Menu -->
                                            <div class="hs-mega-menu w-100 u-header__sub-menu" aria-labelledby="GPSCarMegaMenu" style="min-width: 330px;">
                                                <div class="row u-header__mega-menu-wrapper">
                                                    <div class="col-md-8">
                                                        <div class="row">
                                                            <div class="col-md-3">
                                                                <span class="u-header__sub-menu-title"><a href="resources/mba-news.php" style="color:black;">MBA NEWS</a></span>
                                                                <span class="u-header__sub-menu-title"><a href="resources/mba-admission-news.php" style="color:black;">MBA Admission News</a></span>
                                                                <span class="u-header__sub-menu-title"><a href="resources/mba-articles.php" style="color:black;">MBA Articles</a></span>
                                                                <span class="u-header__sub-menu-title"><a href="resources/mba-alumni.php" style="color:black;">MBA Alumni Salary Data</a></span>
                                                                <span class="u-header__sub-menu-title"><a href="resources/mba-discussions.php" style="color:black;">Discussions</a></span>
                                                                <span class="u-header__sub-menu-title"><a href="resources/mba-ask-question.php" style="color:black;">Ask a Question</a></span>
                                                                <span class="u-header__sub-menu-title"><a href="resources/mba-apply-to-college.php" style="color:black;">Apply to College</a></span>
                                                                <span class="u-header__sub-menu-title"><a href="resources/mba-ntrends-in-mba.php" style="color:black;">Trends in MBA</a></span>
                                                                
                                                            </div>
                                                            <div class="col-md-3">
                                                                
                                                                
                                                            </div>
                                                            <div class="col-md-3">
                                                                
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                
                                                    
                                                    <div class="col-md-4">
                                                        <a href="#" class="d-block">
                                                            <img class="img-fluid" src="assets/image/careerlaksh-mba-college-banner-b.png" alt="assets/image/careerlaksh-mba-college-banner-image">
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- End GPS & Car - Mega Menu -->
                                        </li>
                                        <!-- End GPS & Car -->

                                        <!-- Cameras & Accessories -->
                                        <li class="nav-item hs-has-mega-menu u-header__nav-item"
                                            data-event="hover"
                                            data-animation-in="slideInUp"
                                            data-animation-out="fadeOut">
                                            <a id="CamerasAccessoriesMegaMenu" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Compare Colleges</a>

                                            
                                            <!-- End Cameras & Accessories - Mega Menu -->
                                        </li>
                                        <!-- End Cameras & Accessories -->

                                        <!-- Movies & Games -->
                                        <li class="nav-item hs-has-mega-menu u-header__nav-item"
                                            data-event="hover"
                                            data-animation-in="slideInUp"
                                            data-animation-out="fadeOut">
                                            <a id="MoviesGamesMegaMenu" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Online Counselling</a>

                                            <!-- Movies & Games - Mega Menu -->
                                            <!--<div class="hs-mega-menu w-100 u-header__sub-menu" aria-labelledby="MoviesGamesMegaMenu">-->
                                            <!--    <div class="row u-header__mega-menu-wrapper">-->
                                            <!--        <div class="col-md-4">-->
                                            <!--            <div class="row">-->
                                            <!--                <div class="col">-->
                                            <!--                    <a href="#" class="d-block">-->
                                            <!--                        <img class="img-fluid" src="assets/office-img/Head-office.jpg" alt="head-office-image">-->
                                            <!--                    </a>-->
                                            <!--                </div>-->
                                            <!--                <div class="col">-->
                                            <!--                    <span class="u-header__sub-menu-title">Head Office 1.</span>-->
                                            <!--                    <ul class="u-header__sub-menu-nav-group">-->
                                            <!--                        <li><a href="https://careerlaksh.com/mba/contact.php" class="nav-link u-header__sub-menu-nav-link">Noida Sec-18</a></li>-->
                                            <!--                        <li><a href="https://careerlaksh.com/mba/contact.php" class="nav-link u-header__sub-menu-nav-link">NCR Delhi</a></li>-->
                                                                    
                                            <!--                        <li><a href="https://careerlaksh.com/mba/contact.html" class="nav-link u-header__sub-menu-nav-link">CareerLaksh</a></li>-->
                                                                    
                                            <!--                    </ul>-->
                                            <!--                </div>-->
                                            <!--            </div>-->
                                            <!--        </div>-->
                                            <!--        <div class="col-md-4">-->
                                            <!--            <div class="row">-->
                                            <!--                <div class="col">-->
                                            <!--                    <a href="#" class="d-block">-->
                                            <!--                        <img class="img-fluid" src="assets/office-img/Head-office-a-b.jpg" alt="head-office-image">-->
                                            <!--                    </a>-->
                                            <!--                </div>-->
                                            <!--                <div class="col">-->
                                            <!--                    <span class="u-header__sub-menu-title">Counselling</span>-->
                                            <!--                    <ul class="u-header__sub-menu-nav-group">-->
                                                                    
                                                                    
                                            <!--                    </ul>-->
                                            <!--                </div>-->
                                            <!--            </div>-->
                                            <!--        </div>-->
                                            <!--        <div class="col-md-4">-->
                                            <!--            <div class="row">-->
                                            <!--                <div class="col">-->
                                            <!--                    <a href="#" class="d-block">-->
                                            <!--                        <img class="img-fluid" src="assets/office-img/Head-office-a-b.jpg" alt="head-office-image">-->
                                            <!--                    </a>-->
                                            <!--                </div>-->
                                            <!--                <div class="col">-->
                                            <!--                    <span class="u-header__sub-menu-title">Head Office 1.</span>-->
                                            <!--                    <ul class="u-header__sub-menu-nav-group">-->
                                                                    
                                                                    
                                            <!--                    </ul>-->
                                            <!--                </div>-->
                                            <!--            </div>-->
                                            <!--        </div>-->
                                            <!--    </div>-->
                                            <!--</div>-->
                                            <!-- End Movies & Games - Mega Menu -->
                                        </li>
                                        <!-- End Movies & Games -->
                                    </ul>
                                </div>
                                <!-- End Navigation -->
                            </nav>
                            <!-- End Nav -->
                        </div>
                    </div>
                </div>
                <!-- End Primary-menu-wide -->
            </div>
        </header>
        <!-- ========== END HEADER ========== -->
    </>
  );
};

export default Header;
