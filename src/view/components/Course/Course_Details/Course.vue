<template>

    <div class="single-course-01">
        <div
                class="tutor-wrap post-1990 courses type-courses status-publish has-post-thumbnail hentry course-language-russian course-category-data-modeling course-tag-big-data course-tag-data-analysis course-tag-data course-tag-data-modeling course-paid course-purchasable on-sale">
            <div class="tutor-full-width-course-top tutor-course-top-info course-top-info-light">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">

                            <div class="tutor-single-course-lead-info">

                                <div class="tutor-course-badges-wrap">

                                    <!--                                    <div class="tutor-course-badges">-->
                                    <!--                                        <div class="tutor-course-badge onsale">-39%</div>-->
                                    <!--                                    </div>-->
                                    <div class="tutor-course-header-categories">
                                        <a href="#">مدل سازی داده ها</a>
                                    </div>
                                </div>


                                <h1 class="tutor-course-header-h1">{{ model.title }}</h1>


                                <div class="tutor-single-course-lead-meta">

                                    <div class="lead-meta-item meta-instructor">
                                        <div class="lead-meta-label">
                                            <img alt=""
                                                 :src="getPublicUrl(model.teacherAvatar)"
                                                 class="avatar avatar-32 photo" height="32" width="32"
                                                 loading="lazy" decoding="async"/>
                                        </div>
                                        <div class="lead-meta-value instructor-name">{{ model.teacherName }}</div>
                                    </div>

                                    <!--                                    <div class="lead-meta-item meta-last-update">-->
                                    <!--                                        <span class="lead-meta-value">اخرین بروزرسانی تیر 28, 1401</span>-->
                                    <!--                                    </div>-->
                                </div>

                                <div class="tutor-single-course-lead-meta">

                                    <div class="lead-meta-item meta-course-total-enrolled">
                                        <div class="lead-meta-label">
                                            <i class="meta-icon far fa-user-alt"></i>
                                        </div>
                                        <div class="lead-meta-value student-enrolled">
                                            {{ model.studentCounts + " " + "نفر ثبت نام کرده اند" }}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tutor-full-width-course-body">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="tutor-single-course-main-content tm-sticky-column">


                                <!--                              TODO  <pre-quisites></pre-quisites>-->

                                <content>
                                </content>


                                <benefits>
                                </benefits>


                                <audience-items>
                                </audience-items>


                                <requirements>
                                </requirements>

                                <teachers>

                                </teachers>

                                <comment>
                                </comment>


                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="tutor-single-course-sidebar tm-sticky-column">


                                <div class="tutor-price-preview-box box-has-media">

                                    <div class="tutor-price-box-thumbnail">
                                        <div class="tutor-video-player">
                                            <input type="hidden"
                                                   value="null">
                                            <div class="loading-spinner" area-hidden="true"></div>
                                            <div class="tutor-ratio tutor-ratio-16x9">
                                                <div class="r1_iframe_embed">
                                                    <iframe src="https://player.arvancloud.ir/index.html?config=https://matink1490.arvanvod.ir/LgZYRMK5NB/oXZyE7WQPe/origin_config.json&skin=shaka"
                                                            style="width: 100%;border:0 #ffffff none;"
                                                            name="ForBiggerFun"
                                                            frameborder="0"
                                                            allow="accelerometer; autoplay; encrypted-media; gyroscope"
                                                            allowFullScreen="true"
                                                            webkitallowfullscreen="true"
                                                            mozallowfullscreen="true"></iframe>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                    <div class="tutor-price">
                                        <div class="price">
                                            <p class="price">
                                                <ins>
                                                    <span
                                                            class="woocommerce-Price-amount amount">
                                                        <bdi>
                                                            ۴۶,۰۰۰&nbsp;
                                                            <span class="woocommerce-Price-currencySymbol">تومان</span>
                                                        </bdi>
                                                    </span>
                                                </ins>
                                                <del><span
                                                        class="woocommerce-Price-amount amount"><bdi>۷۶,۰۰۰&nbsp;<span
                                                        class="woocommerce-Price-currencySymbol">تومان</span></bdi></span>
                                                </del>
                                            </p>
                                        </div>
                                        <span class="course-price-badge onsale">39% تخفیف</span>
                                    </div>

                                    <div class="tutor-single-course-meta tutor-meta-top">

                                        <div class="tutor-course-level">
													<span class="meta-label">
														<i class="meta-icon far fa-sliders-h"></i>
														سطح </span>
                                            <div class="meta-value">مبتدی</div>
                                        </div>

                                        <div class="tutor-course-duration">
													<span class="meta-label">
														<i class="meta-icon far fa-clock"></i>
														مدت زمان </span>
                                            15.3 ساعت
                                        </div>

                                        <div class="tutor-course-lesson-count">
													<span class="meta-label">
														<i class="meta-icon far fa-play-circle"></i>
														تعداد درس </span>
                                            <div class="meta-value">
                                                1 درس
                                            </div>
                                        </div>

                                        <div class="tutor-course-categories">
													<span class="meta-label">
														<i class="meta-icon far fa-tag"></i>
														موضوع </span>
                                            <div class="meta-value">
                                                <a
                                                        href="https://dana-team.com/products/edumall/course-category/data-modeling/">مدل
                                                    سازی داده ها</a>
                                            </div>
                                        </div>

                                        <div class="tutor-course-language">
													<span class="meta-label">
														<i class="meta-icon far fa-globe"></i>
														زبان </span>
                                            <div class="meta-value">
                                                روسی
                                            </div>
                                        </div>

                                    </div>


                                    <div
                                            class="tutor-single-course-segment  tutor-course-material-includes-wrap">
                                        <h4 class="tutor-segment-title">موارد ارائه شده</h4>
                                        <div class="tutor-course-target-audience-content">
                                            <ul
                                                    class="tutor-course-target-audience-items tutor-custom-list-style">
                                                <li>فیلم</li>
                                                <li>جزوات</li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div class="tutor-single-add-to-cart-box open-popup-login ">

                                        <div class="tutor-course-purchase-box">
                                            <div class="cart-notification">
                                                <button
                                                        @click="addToCart"
                                                        class="single_add_to_cart_button ajax_add_to_cart tutor-button alt">
                                                    <i class="far fa-shopping-cart"></i>
                                                    افزودن به سبد خرید
                                                </button>
                                            </div>
                                        </div>

                                    </div>


                                    <div class="tm-button-wrapper"><a
                                            class="tm-button style-flat tm-button-nm edumall-course-wishlist-btn wishlist-button-01 open-popup-login"
                                            href="javascript:void(0);">
                                        <div class="button-content-wrapper">


                                            <span class="button-text">افزودن به علاقه مندی ها</span>

                                        </div>
                                    </a></div>

                                    <div class="tutor-social-share-wrap"
                                         data-social-share-config="{&quot;title&quot;:&quot;\u062a\u0633\u0644\u0637 \u0628\u0631 \u0627\u0635\u0648\u0644 \u0645\u062f\u0644 \u0633\u0627\u0632\u06cc \u062f\u0627\u062f\u0647 \u0647\u0627&quot;,&quot;text&quot;:&quot;\u062f\u0631 \u0627\u06cc\u0646 \u062f\u0648\u0631\u0647 \u060c \u0645\u0646 \u0627\u0635\u0648\u0644 \u0648 \u0645\u0641\u0627\u0647\u06cc\u0645 \u0645\u062f\u0644 \u0633\u0627\u0632\u06cc \u062f\u0627\u062f\u0647 \u0647\u0627 \u0631\u0627 \u0627\u0632 \u0637\u0631\u06cc\u0642 \u062a\u0639\u062f\u0627\u062f\u06cc \u0627\u0632 \u0628\u0647\u062a\u0631\u06cc\u0646 \u0634\u06cc\u0648\u0647 \u0647\u0627 \u0648 \u062a\u06a9\u0646\u06cc\u06a9 \u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u06cc\u062c\u0627\u062f \u0645\u062f\u0644 \u0647\u0627\u06cc \u062f\u0627\u062f\u0647 \u062f\u0631 \u0633\u0627\u0632\u0645\u0627\u0646 \u062e\u0648\u062f \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u06cc\u062f \u060c \u0627\u0632 \u0634\u0645\u0627 \u0645\u06cc \u06af\u06cc\u0631\u0645. \u0646\u0645\u0648\u0646\u0647 \u0647\u0627\u06cc \u0628\u0633\u06cc\u0627\u0631\u06cc \u0631\u0627 \u067e\u06cc\u062f\u0627 \u062e\u0648\u0627\u0647\u06cc\u062f \u06a9\u0631\u062f \u06a9\u0647 \u0645\u0641\u0627\u0647\u06cc\u0645 \u0648 \u062a\u06a9\u0646\u06cc\u06a9 \u0647\u0627\u06cc \u06a9\u0644\u06cc\u062f\u06cc \u067e\u0648\u0634\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u062f\u0631 \u06a9\u0644 \u062f\u0648\u0631\u0647 \u0631\u0627 \u0628\u0647 \u0648\u0636\u0648\u062d \u0646\u0634\u0627\u0646 \u0645\u06cc \u062f\u0647\u062f. \u062f\u0631 \u067e\u0627\u06cc\u0627\u0646 \u062f\u0648\u0631\u0647 \u060c \u0634\u0645\u0627 \u0622\u0645\u0627\u062f\u0647 \u062e\u0648\u0627\u0647\u06cc\u062f \u0628\u0648\u062f \u062a\u0627 \u0646\u0647 \u062a\u0646\u0647\u0627 \u0627\u06cc\u0646 \u0627\u0635\u0648\u0644 \u0631\u0627 \u0639\u0645\u0644\u06cc \u0633\u0627\u0632\u06cc\u062f \u060c \u0628\u0644\u06a9\u0647 \u0647\u0645\u0686\u0646\u06cc\u0646 \u062a\u0635\u0645\u06cc\u0645 \u06af\u06cc\u0631\u06cc \u062f\u0631 \u0632\u0645\u06cc\u0646\u0647 \u0645\u062f\u0644 \u0633\u0627\u0632\u06cc \u0648 \u0637\u0631\u0627\u062d\u06cc \u06a9\u0644\u06cc\u062f\u06cc \u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632 &#8220;\u0647\u0646\u0631&#8221; \u0645\u062f\u0644 \u0633\u0627\u0632\u06cc \u062f\u0627\u062f\u0647 \u0647\u0627 \u0631\u0627 \u06a9\u0647 \u0627\u0632 \u067e\u06cc\u0686 \u0648 \u0645\u0647\u0631\u0647 \u0641\u0631\u0627\u062a\u0631 \u0645\u06cc \u0631\u0648\u062f \u060c \u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u062f. \u062a\u06a9\u0646\u06cc\u06a9 \u0647\u0627 \u0648 \u0627\u0644\u06af\u0648\u0647\u0627\u06cc \u0637\u0631\u0627\u062d\u06cc \u0633\u0627\u0632\u0645\u0627\u0646\u0647\u0627 \u06cc\u0627 \u06af\u0631\u0648\u0647\u06cc \u0627\u0632 \u0633\u0627\u0632\u0645\u0627\u0646\u0647\u0627 \u0647\u0646\u06af\u0627\u0645\u06cc \u0643\u0647 \u0628\u06cc\u0634 \u0627\u0632 \u06cc\u0643 \u0646\u0633\u062e\u0647 \u0627\u0632 \u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u06cc\u0643 \u0646\u0647\u0627\u062f \u062a\u062c\u0627\u0631\u06cc \u0631\u0627 \u062f\u0631 \u0627\u062e\u062a\u06cc\u0627\u0631 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u0646\u062f \u060c \u0645\u06cc \u062a\u0648\u0627\u0646\u0646\u062f \u0646\u06cc\u0627\u0632 \u0628\u0647 \u0645\u062f\u06cc\u0631\u06cc\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0627\u0635\u0644\u06cc \u0631\u0627 \u0627\u06cc\u062c\u0627\u062f \u0643\u0646\u0646\u062f. \u062f\u0627\u0634\u062a\u0646 \u0628\u06cc\u0634 \u0627\u0632 \u06cc\u06a9 \u0646\u0633\u062e\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0627\u0635\u0644\u06cc \u0628\u0647 \u0637\u0648\u0631 \u0630\u0627\u062a\u06cc \u0628\u0647 \u0645\u0639\u0646\u0627\u06cc \u0639\u062f\u0645 \u06a9\u0627\u0631\u0627\u06cc\u06cc \u062f\u0631 \u062d\u0641\u0638 &#8220;\u06cc\u06a9 \u0646\u0633\u062e\u0647 \u0648\u0627\u062d\u062f \u0627\u0632 \u062d\u0642\u06cc\u0642\u062a&#8221; \u062f\u0631 \u0647\u0645\u0647 \u0646\u0633\u062e\u0647 \u0647\u0627 \u0627\u0633\u062a. \u062a\u0627 \u0632\u0645\u0627\u0646\u06cc \u06a9\u0647 \u0627\u0641\u0631\u0627\u062f \u060c \u0641\u0631\u0627\u06cc\u0646\u062f\u0647\u0627 \u0648 \u0641\u0646\u0627\u0648\u0631\u06cc \u0628\u0631\u0627\u06cc \u0627\u0637\u0645\u06cc\u0646\u0627\u0646 \u0627\u0632 \u0647\u0645 \u0631\u0627\u0633\u062a\u0627 \u0646\u06af\u0647 \u062f\u0627\u0634\u062a\u0646 \u0645\u0642\u0627\u062f\u06cc\u0631 \u062f\u0627\u062f\u0647 \u0647\u0627 \u062f\u0631 \u0647\u0645\u0647 \u0646\u0633\u062e\u0647 \u0647\u0627 \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f \u060c \u062a\u0642\u0631\u06cc\u0628\u0627\u064b \u0627\u062c\u062a\u0646\u0627\u0628 \u0646\u0627\u067e\u0630\u06cc\u0631 \u0627\u0633\u062a \u06a9\u0647 \u0646\u0633\u062e\u0647 \u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u06cc\u06a9 \u0646\u0647\u0627\u062f \u062a\u062c\u0627\u0631\u06cc \u0646\u06af\u0647\u062f\u0627\u0631\u06cc \u0634\u0648\u062f.&quot;,&quot;image&quot;:&quot;https:\/\/dana-team.com\/products\/edumall\/wp-content\/uploads\/2020\/11\/course-thumbnail-22-1.jpg&quot;}">
                                        <a class="tutor_share s_facebook"> <i
                                                class="tutor-valign-middle tutor-icon-brand-facebook"></i>
                                        </a><a class="tutor_share s_twitter"> <i
                                            class="tutor-valign-middle tutor-icon-brand-twitter"></i> </a><a
                                            class="tutor_share s_linkedin"> <i
                                            class="tutor-valign-middle tutor-icon-brand-linkedin"></i> </a>
                                    </div>

                                </div> <!-- tutor-price-preview-box -->


                                <categories :items="model.courseCategories">
                                </categories>

                                <div class="widget edumall-wp-widget-courses">
                                    <p class="widget-title heading">دوره های مرتبط</p>
                                    <div class="edumall-courses edumall-animation-zoom-in">
                                        <div
                                                class="course-item edumall-box post-2091 courses type-courses status-publish has-post-thumbnail hentry course-language-german course-category-career-development course-category-business course-tag-database course-tag-data course-tag-manager course-tag-managemen course-paid course-purchasable on-sale">
                                            <div class="course-thumbnail edumall-image">
                                                <div class="tutor-course-badge onsale">-38%</div>
                                                <a
                                                        href="https://dana-team.com/products/edumall/courses/oracle-database-administration-for-beginners/">
                                                    <img
                                                            alt="course-thumbnail-34" width="120"/> </a>
                                            </div>
                                            <div class="course-info">

                                                <div class="course-category">
                                                    <a
                                                            href="https://dana-team.com/products/edumall/course-category/career-development/">توسعه
                                                        شغلی</a>
                                                </div>

                                                <h5 class="course-title course-loop-title-collapse-2-rows">
                                                    <a
                                                            href="https://dana-team.com/products/edumall/courses/oracle-database-administration-for-beginners/">اداره
                                                        پایگاه داده اوراکل برای مبتدیان</a>
                                                </h5>

                                                <div class="course-loop-price">
                                                    <div class="tutor-price">
                                                        <div class="price">
                                                            <p class="price">
                                                                <ins><span
                                                                        class="woocommerce-Price-amount amount"><bdi>۲۸,۰۰۰&nbsp;<span
                                                                        class="woocommerce-Price-currencySymbol">تومان</span></bdi></span>
                                                                </ins>
                                                                <del><span
                                                                        class="woocommerce-Price-amount amount"><bdi>۴۵,۰۰۰&nbsp;<span
                                                                        class="woocommerce-Price-currencySymbol">تومان</span></bdi></span>
                                                                </del>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                                class="course-item edumall-box post-2040 courses type-courses status-publish has-post-thumbnail hentry course-language-german course-category-artificial-intelligence course-tag-data course-tag-computer course-tag-ai course-paid course-purchasable on-sale">
                                            <div class="course-thumbnail edumall-image">
                                                <div class="tutor-course-badge onsale">-24%</div>
                                                <a
                                                        href="https://dana-team.com/products/edumall/courses/artificial-intelligence-machine-learning/">
                                                    <img
                                                            alt="course-thumbnail-26" width="120"/> </a>
                                            </div>
                                            <div class="course-info">

                                                <div class="course-category">
                                                    <a
                                                            href="https://dana-team.com/products/edumall/course-category/artificial-intelligence/">هوش
                                                        مصنوعی</a>
                                                </div>

                                                <h5 class="course-title course-loop-title-collapse-2-rows">
                                                    <a
                                                            href="https://dana-team.com/products/edumall/courses/artificial-intelligence-machine-learning/">هوش
                                                        مصنوعی و یادگیری ماشین</a>
                                                </h5>

                                                <div class="course-loop-price">
                                                    <div class="tutor-price">
                                                        <div class="price">
                                                            <p class="price">
                                                                <ins>
                                                                    <span
                                                                            class="woocommerce-Price-amount amount"><bdi>۲۵,۰۰۰&nbsp;<span
                                                                            class="woocommerce-Price-currencySymbol">تومان</span></bdi></span>
                                                                </ins>
                                                                <del>
                                                                    <span
                                                                            class="woocommerce-Price-amount amount"><bdi>۳۳,۰۰۰&nbsp;<span
                                                                            class="woocommerce-Price-currencySymbol">تومان</span></bdi></span>
                                                                </del>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                                class="course-item edumall-box post-2016 courses type-courses status-publish has-post-thumbnail hentry course-language-italian course-category-machine-learning course-tag-data course-tag-science course-tag-computer course-paid course-purchasable on-sale">
                                            <div class="course-thumbnail edumall-image">

                                                <a
                                                        href="https://dana-team.com/products/edumall/courses/introduction-to-machine-learning-for-data-science/">
                                                    <img
                                                            alt="course-thumbnail-25" width="120"/> </a>
                                            </div>
                                            <div class="course-info">

                                                <div class="course-category">
                                                    <a
                                                            href="https://dana-team.com/products/edumall/course-category/machine-learning/">فراگیری
                                                        ماشین</a>
                                                </div>

                                                <h5 class="course-title course-loop-title-collapse-2-rows">
                                                    <a
                                                            href="https://dana-team.com/products/edumall/courses/introduction-to-machine-learning-for-data-science/">مقدمه
                                                        ای بر یادگیری ماشین برای علوم داده</a>
                                                </h5>

                                                <div class="course-loop-price">
                                                    <div class="tutor-price">
                                                        <div class="price">
                                                            <p class="price">
                                                                <ins><span
                                                                        class="woocommerce-Price-amount amount"><bdi>۶۵,۰۰۰&nbsp;<span
                                                                        class="woocommerce-Price-currencySymbol">تومان</span></bdi></span>
                                                                </ins>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppTitleBar from "@/view/widget/AppTitleBar.vue";
import PreQuisites from "@/view/components/Course/Course_Details/Widget/PreQuisites.vue";
import Tags from "@/view/components/Course/Course_Details/Widget/Tags.vue";
import Content from "@/view/components/Course/Course_Details/Widget/Content.vue";
import Benefits from "@/view/components/Course/Course_Details/Widget/Benefits.vue";
import AudienceItems from "@/view/components/Course/Course_Details/Widget/AudienceItems.vue";
import Requirements from "@/view/components/Course/Course_Details/Widget/Requirements.vue";
import Teachers from "@/view/components/Course/Course_Details/Widget/Teachers.vue";
import Comment from "@/view/components/Course/Course_Details/Widget/Comment.vue";
import Categories from "@/view/components/Course/Course_Details/Widget/Categories.vue";

export default {
    name: "Course",
    components: {
        Categories,
        Comment, Teachers, Requirements, AudienceItems, Benefits, Content, Tags, PreQuisites, AppTitleBar
    },
    data() {
        return {
            model: {
                title: null,
                studentCounts: 0,
                teacherAvatar: null,
                teacherName: null,
                courseCategories: [],
            }
        }
    },
    async created() {
        const courseSlug = this.$route.params.courseSlug;
        const [err, data] = await this.to(this.http.get(`/course/course-details/${courseSlug}`));
        if (!err) {
            this.model.title = data.title;
            this.model.studentCounts = data.studentCounts;
            const teacher = data.teacher;
            if (teacher != null) {
                this.model.teacherAvatar = teacher.avatar;
                this.model.teacherName = teacher.fullName;
            }
            document.title = `${this.model.title} - رشدآپ`;
        }

    }
}
</script>

<style scoped>
.tutor-price-preview-box .price .amount {
    font-size: 34px !important;
}

.tutor-price-preview-box .price del, .tutor-price-preview-box .price del .amount {
    font-size: 15px !important;
    font-weight: 500 !important;
}
</style>