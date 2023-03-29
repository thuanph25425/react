import logo from '../src/image/8-1626444967.jpg';
import './App.css';

function App() {

  let endDate = new Date("04/17/2023 00:00:00").getTime();
  let check = setInterval(function () {
    let now = new Date().getTime();
    let distance = endDate - now;
    let day = Math.floor(distance / (24 * 60 * 60 * 1000));
    let hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let minute = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
    let seconds = Math.floor((distance % (60 * 1000)) / 1000);
    document.getElementById('day').innerText = day;
    document.getElementById('hour').innerText = hour;
    document.getElementById('minute').innerText = minute;
    document.getElementById('seconds').innerText = seconds;
    document.getElementById('day1').innerText = day;
    document.getElementById('hour1').innerText = hour;
    document.getElementById('minute1').innerText = minute;
    document.getElementById('seconds1').innerText = seconds;
    if (distance <= 0) {
      clearInterval(check);
    }
  }, 1000);
  return (
    <div className="App">
      <div id="root">
        <div class="flex justify-between time-header mb-8 mt-8">
          <div class=" flex flex-row text-13">
            <div class="mr-25">
              <span>Hà Nội, Việt Nam - thứ 6, 03/03/2023 </span>
            </div>
            <div class="mr-25">
              <span>Hotline: 0236 895 593</span>
            </div>
            <div>
              <span>Email: daugiatructuyen@gmail.com</span>
            </div>
          </div>
          <div class="flex font-bold text-12">
            <div class="mr-25">
              <span><a href="" class="cursor-pointer letter-spacing-big text-decoration text-black">ĐĂNG
                KÝ</a></span>
            </div>
            <div>
              <span><a href="" class="cursor-pointer letter-spacing-big text-decoration text-black">ĐĂNG
                NHẬP</a></span>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center w-full border-top">
          <div class="flex items-center justify-between flex-row mb-12">
            <div class="flex justify-center">
              <div class="">
                <div>
                  <svg width="103" height="79" viewBox="0 0 103 79" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M102.578 53.0161C102.578 53.1883 102.578 53.3599 102.557 53.5104C102.278 62.0418 95.3759 68.6609 86.7639 68.6609H37.4398L18.5 77.9238L20.2852 68.6609H14.831C14.7028 68.6609 14.5746 68.6394 14.4464 68.6179C6.49661 67.823 0.170963 60.9461 0 52.8656V52.5004C0.0213703 48.2239 1.70963 44.2053 4.72284 41.2181C7.35139 38.5962 10.7279 37.0275 14.3609 36.6837C14.3396 36.2323 14.3181 35.781 14.3181 35.3298C14.3396 30.1292 16.3697 25.2724 20.0454 21.6191C23.7211 17.9658 28.6363 16.0531 33.7224 16.0102C36.7784 16.0316 39.7489 16.7838 42.4201 18.2022C45.9677 7.47854 56.0332 0 67.4665 0H67.5947C74.6254 0.0429801 81.2288 2.81521 86.1654 7.8439C91.1235 12.8941 93.8157 19.556 93.7731 26.6477C93.7516 30.4945 92.9186 34.2767 91.2943 37.7152C97.9193 39.6923 102.599 45.7956 102.578 53.0161Z"
                      fill="url(#paint0_linear_570_42845)"></path>
                    <path
                      d="M52.2675 17.1731C51.8294 16.7354 51.2549 16.5027 50.6391 16.5027C50.0236 16.5027 49.449 16.7354 49.011 17.1731L33.6744 32.5099C33.2365 32.9477 33.004 33.5223 33.004 34.1379C33.004 34.7537 33.2365 35.3283 33.6744 35.766C34.1122 36.2039 34.6868 36.4364 35.3024 36.4364C35.9181 36.4364 36.4927 36.2039 36.9305 35.766L51.597 21.086C51.597 21.086 51.597 21.086 51.6106 21.0723C51.6106 21.0723 51.6106 21.0723 51.6242 21.0586L52.2675 20.4156C52.7051 19.9777 52.9376 19.4032 52.9376 18.7875C52.9376 18.1719 52.6914 17.6109 52.2675 17.1731ZM57.3293 59.4346C57.7674 59.8727 58.3419 60.1051 58.9573 60.1051C59.5732 60.1051 60.1478 59.8727 60.5854 59.4346L75.9224 44.0844C76.8253 43.1814 76.8253 41.7313 75.9224 40.8282C75.4844 40.3903 74.9099 40.1578 74.2944 40.1578C73.6786 40.1578 73.104 40.3903 72.6664 40.8282L57.9862 55.5082C57.9862 55.5082 57.9862 55.5082 57.9862 55.5218C57.9862 55.5218 57.9862 55.5218 57.9726 55.5218L57.3293 56.165C56.8918 56.6026 56.6589 57.1775 56.6589 57.793C56.6589 58.4226 56.8918 58.9971 57.3293 59.4346ZM57.2338 53.2784L69.7657 40.7461L52.3494 23.3298L39.8173 35.8618L57.2338 53.2784ZM50.5162 49.557L43.648 42.6888C43.0736 43.8929 43.2787 45.384 44.2639 46.3692L46.8222 48.9275C47.8347 49.9264 49.3121 50.1316 50.5162 49.557ZM16.2033 77.0016C16.901 77.6993 17.8177 78.0686 18.8028 78.0414C19.7877 78.0141 20.6908 77.6038 21.3474 76.8646L45.1805 50.2685L42.9366 48.0246L16.3401 71.8709C15.615 72.5278 15.1909 73.4307 15.1635 74.416C15.1361 75.3872 15.5055 76.3174 16.2033 77.0016Z"
                      fill="white"></path>
                    <path
                      d="M70.61 22.9056C72.0879 24.3838 72.9044 26.362 72.8977 28.4704C72.8949 29.3739 72.1512 30.1176 71.2474 30.1205C70.344 30.1232 69.6049 29.3843 69.6194 28.4922C69.6116 27.2528 69.152 26.0958 68.2859 25.2298C67.4198 24.3869 66.2976 23.9155 65.1043 23.9308C64.1889 23.9453 63.4618 23.2177 63.4531 22.3027C63.4556 21.3991 64.1878 20.667 65.0915 20.6642C67.165 20.6461 69.1201 21.4392 70.5985 22.8941L70.61 22.9056Z"
                      fill="white"></path>
                    <path
                      d="M63.4766 14.8425C63.468 13.9505 64.2117 13.2069 65.1154 13.204C69.1466 13.1681 72.9411 14.7084 75.7934 17.5607L75.8281 17.5954C78.7036 20.4707 80.2899 24.3116 80.277 28.4123C80.2742 29.3159 79.5421 30.0479 78.6271 30.0624C77.7234 30.0652 76.9958 29.3378 76.9987 28.4342C77.0091 25.1906 75.7673 22.1828 73.504 19.9194L73.4809 19.8963C71.2523 17.6676 68.2676 16.4491 65.1167 16.4822C64.2129 16.4851 63.4853 15.7576 63.4766 14.8425Z"
                      fill="white"></path>
                    <path
                      d="M81.4159 11.8898C85.7924 16.2662 88.1952 22.1085 88.1873 28.3523C88.1845 29.2558 87.4523 29.9879 86.5486 29.9908C85.6452 29.9936 84.9176 29.2661 84.9206 28.3626C84.9375 22.9876 82.8682 17.9667 79.115 14.2137L79.0691 14.1675C75.339 10.4608 70.3987 8.44919 65.1395 8.48889C64.2362 8.49175 63.5087 7.76423 63.5 6.8723C63.5029 5.96874 64.2349 5.23667 65.1267 5.22228C71.2549 5.16826 77.0278 7.52478 81.3696 11.8435C81.3812 11.855 81.4044 11.8781 81.4159 11.8898Z"
                      fill="white"></path>
                    <defs>
                      <linearGradient id="paint0_linear_570_42845" x1="31.8051" y1="16.999" x2="94.5706"
                        y2="68.4074" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFD466"></stop>
                        <stop offset="1" stop-color="#FF9900"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div class="">
                <div class="font-bold text-25 mt-12 mb-4 ml--4">
                  <span>ĐẤU GIÁ TRỰC TUYẾN</span>
                </div>
                <span class="ml-8">TRUNG TÂM DỊCH VỤ ĐẤU GIÁ TÀI SẢN</span>
              </div>
            </div>

            <ul class="flex justify-center items-center font-bold list-style">
              <li class="mr-50">
                <span><a href="" class="hover-link-yellow text-decoration text-black">Trang chủ</a></span>
              </li>
              <li class="mr-50 ">
                <span><a href="" class=" hover-link-yellow text-decoration text-black">Giới thiệu</a></span>
              </li>
              <li class="mr-50">
                <span><a href="" class=" hover-link-yellow text-decoration text-black">Thông tin đấu
                  giá</a></span>
              </li>
              <li class="mr-50 ">
                <span><a href="" class="text-decoration text-black hover-link-yellow">Đấu giá khác</a></span>
              </li>
              <li class="mr-50 ">
                <span><a href="" class="text-decoration text-black hover-link-yellow">Tin tức</a></span>
              </li>
              <li class="mr-50">
                <span><a href="" class="text-decoration text-black hover-link-yellow">Hỗ trợ</a></span>
              </li>
              <li class="mr-50">
                <span><a href=""></a></span>
              </li>
            </ul>


            <button type="button" class="bg-yellow p-12 text-white rounded ml-5 font-bold border-none">ĐĂNG KÝ BÁN
              ĐẤU GIÁ</button>

          </div>
        </div>


        <div class="border-top border-bottom ">
          <a href="" class=""><img src={logo} alt="" class="h-450 w-full" /></a>
        </div>


        <div class="">
          <div class="bg-neutral-200 flex justify-center items-center flex-col">
            <div class="pb-20"></div>
            <div class="section-banner mt-40 text-black">
              <span>TÀI SẢN SẮP ĐƯỢC ĐẤU GIÁ</span>
            </div>
            <div class="flex justify-center pb-20">
              <div class="mt-40 mb-30">
                <div class="flex items-center justify-center">
                  <a href="" class="w-280 text-decoration">
                    <div class="w-260 border border-box bg-white rounded">
                      <div class="h-250">
                        <div class="">
                          <img src={logo} alt="" class=" w-full" />
                        </div>
                        <div class="time">
                          <div class="item">
                            <div id="day"></div>
                          </div>
                          <div class="item ml-10">
                            <div id="hour"></div>
                          </div>
                          <div class="item ml-10">
                            <div id="minute"></div>
                          </div>
                          <div class="item ml-10">
                            <div id="seconds"></div>
                          </div>
                        </div>

                      </div>
                      <div class="flex justify-center items-center flex-col h-190">
                        <span>fpt</span>
                        <span>gia khoi diem</span>
                        <span>1000</span>
                        <span>thoi gian: 9/3/2023</span>
                        <button class="bg-yellow   text-16 text-white mt-30 border-none w-100 h-32 rounded-10">Đăng
                          ký</button>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

            </div>
            <div class="section-banner mt-40 text-black">
              <span>TÀI SẢN ĐANG ĐƯỢC ĐẤU GIÁ</span>
            </div>
            <div class="flex justify-center pb-20">
              <div class="mt-40 mb-70">
                <div class="flex items-center justify-center">
                  <a href="" class="w-280 text-decoration">
                    <div class="w-260 border border-box bg-white rounded">
                      <div class="h-250">
                        <div class="">
                          <img src={logo} alt="" class=" w-full" />
                        </div>
                        <div class="time">
                          <div class="item ml-10">
                            <div id="day1"></div>
                          </div>
                          <div class="item ml-10">
                            <div id="hour1"></div>
                          </div>
                          <div class="item ml-10">
                            <div id="minute1"></div>
                          </div>
                          <div class="item ml-10">
                            <div id="seconds1"></div>
                          </div>
                        </div>

                      </div>

                      <div class="flex justify-center items-center flex-col h-190">
                        <span>fpt</span>
                        <span>gia khoi diem</span>
                        <span>1000</span>
                        <span>thoi gian: 9/3/2023</span>
                        <div class="font-bold flex justify-center items-center w-full bg-e0f2fe h-50 mt-20 mb--33 rounded-b text-0ea5e9">
                          ĐANG DIỄN RA
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

            </div>
            <div class="flex justify-center flex-col items-center bg-white mb-40">
              <div class="section-banner-white mt-40 text-black">
                <span>HƯỚNG DẪN ĐẤU GIÁ</span>
              </div>

              <div class="pb-20">
                <ol class="flex mt-60 flex-wrap">
                  <li class="stepper-item step-1">
                    <h3 class="mt-30">Đăng ký tham gia trực tuyến</h3>
                    <p class="mt-0">Bạn có thể đăng ký trực tuyến tại website hoặc liên hệ với chúng tôi qua
                      số
                      HOTLINE:0905.156.237</p>
                  </li>
                  <li class="stepper-item step-2">
                    <h3 class="mt-30">Nộp tiền đặt trước</h3>
                    <p class="mt-0">Bạn có thể đăng ký trực tuyến tại website hoặc liên hệ với chúng tôi qua
                      số
                      HOTLINE:0905.156.237</p>
                  </li>
                  <li class="stepper-item step-3">
                    <h3 class="mt-30">Tham gia đấu giá</h3>
                    <p class="mt-0">Bạn có thể đăng ký trực tuyến tại website hoặc liên hệ với chúng tôi qua
                      số
                      HOTLINE:0905.156.237</p>
                  </li>
                  <li class="stepper-item step-4">
                    <h3 class="mt-30">Thủ tục sau đấu giá</h3>
                    <p class="mt-0">Bạn có thể đăng ký trực tuyến tại website hoặc liên hệ với chúng tôi qua
                      số
                      HOTLINE:0905.156.237</p>
                  </li>
                </ol>
              </div>
            </div>


            <div class="bg-white w-1440 flex rounded  justify-center mt-40 m-0-40">
              <div class="w-50 ml-60 mr-40">
                <img src={logo} alt="" class="h-400 w-600" />
              </div>
              <div class="p-a-40 " >
                <div class="flex justify-center flex-col text-left">
                  <span class="text-28 font-bold">ĐĂNG KÝ BÁN TÀI SẢN</span>
                  <span class="text-22 mt-25">Bạn có thể đăng ký trực tuyến tại website hoặc liên hệ với chúng
                    tôi qua số HOTLINE: 0905.156.237.</span>
                  <span class="text-16">Tổ chức sẽ liên hệ làm việc trực tiếp với bạn trong thời gian sớm
                    nhất</span>
                  <button class="mt-40 bg-yellow text-white border-none text-16 w-280 h-60">ĐĂNG KÍ BÁN ĐẤU GIÁ</button>
                </div>

              </div>
            </div>


            <div class="section-banner mt-60 text-black">
              <span>Tin tức - Sự kiện</span>
            </div>


            <div class="w-1440 mt-40 mb-70 grid grid-cols-3 gap-5">
              <a href="" class="text-decoration">
                <div class="flex rounded bg-white w-full w-450 h-128">
                  <div class=""><img src={logo} alt="" class=" rounded-l h-128 w-full " />
                  </div>
                  <div class="flex justify-center flex-col text-left ml-20">
                    <span>06/03/2023</span>
                    <span class="font-bold">test</span>
                    <span>123456789</span>
                  </div>
                </div>
              </a>
              <a href="" class="text-decoration ml-10">
                <div class="flex rounded bg-white w-full w-450 h-128">
                  <div class=""><img src={logo} alt="" class=" rounded-l h-128 w-full " />
                  </div>
                  <div class="flex justify-center flex-col text-left ml-20">
                    <span>06/03/2023</span>
                    <span class="font-bold">test</span>
                    <span>123456789</span>
                  </div>
                </div>
              </a>
              <a href="" class="text-decoration ml-20">
                <div class="flex rounded bg-white w-full w-450 h-128">
                  <div class=""><img src={logo} alt="" class=" rounded-l h-128 w-full " />
                  </div>
                  <div class="flex justify-center flex-col text-left ml-20">
                    <span>06/03/2023</span>
                    <span class="font-bold">test</span>
                    <span>123456789</span>
                  </div>
                </div>
              </a>
              <a href="" class="text-decoration">
                <div class="flex rounded bg-white w-full w-450 h-128">
                  <div class=""><img src={logo} alt="" class=" rounded-l h-128 w-full " />
                  </div>
                  <div class="flex justify-center flex-col text-left ml-20">
                    <span>06/03/2023</span>
                    <span class="font-bold">test</span>
                    <span>123456789</span>
                  </div>
                </div>
              </a>
              <a href="" class="text-decoration ml-10">
                <div class="flex rounded bg-white w-full w-450 h-128">
                  <div class=""><img src={logo} alt="" class=" rounded-l h-128 w-full " />
                  </div>
                  <div class="flex justify-center flex-col text-left ml-20">
                    <span>06/03/2023</span>
                    <span class="font-bold">test</span>
                    <span>123456789</span>
                  </div>
                </div>
              </a>
              <a href="" class="text-decoration ml-20">
                <div class="flex rounded bg-white w-full w-450 h-128">
                  <div class=""><img src={logo} alt="" class=" rounded-l h-128 w-full " />
                  </div>
                  <div class="flex justify-center flex-col text-left ml-20">
                    <span>06/03/2023</span>
                    <span class="font-bold">test</span>
                    <span>123456789</span>
                  </div>
                </div>
              </a>

            </div>

          </div>
        </div>
        <div class="flex justify-between">
          <div class="flex flex-col justify-center p-20-80">
            <div class="flex">
              <div class="">
                <div>
                  <svg width="103" height="79" viewBox="0 0 103 79" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M102.578 53.0161C102.578 53.1883 102.578 53.3599 102.557 53.5104C102.278 62.0418 95.3759 68.6609 86.7639 68.6609H37.4398L18.5 77.9238L20.2852 68.6609H14.831C14.7028 68.6609 14.5746 68.6394 14.4464 68.6179C6.49661 67.823 0.170963 60.9461 0 52.8656V52.5004C0.0213703 48.2239 1.70963 44.2053 4.72284 41.2181C7.35139 38.5962 10.7279 37.0275 14.3609 36.6837C14.3396 36.2323 14.3181 35.781 14.3181 35.3298C14.3396 30.1292 16.3697 25.2724 20.0454 21.6191C23.7211 17.9658 28.6363 16.0531 33.7224 16.0102C36.7784 16.0316 39.7489 16.7838 42.4201 18.2022C45.9677 7.47854 56.0332 0 67.4665 0H67.5947C74.6254 0.0429801 81.2288 2.81521 86.1654 7.8439C91.1235 12.8941 93.8157 19.556 93.7731 26.6477C93.7516 30.4945 92.9186 34.2767 91.2943 37.7152C97.9193 39.6923 102.599 45.7956 102.578 53.0161Z"
                      fill="url(#paint0_linear_570_42845)"></path>
                    <path
                      d="M52.2675 17.1731C51.8294 16.7354 51.2549 16.5027 50.6391 16.5027C50.0236 16.5027 49.449 16.7354 49.011 17.1731L33.6744 32.5099C33.2365 32.9477 33.004 33.5223 33.004 34.1379C33.004 34.7537 33.2365 35.3283 33.6744 35.766C34.1122 36.2039 34.6868 36.4364 35.3024 36.4364C35.9181 36.4364 36.4927 36.2039 36.9305 35.766L51.597 21.086C51.597 21.086 51.597 21.086 51.6106 21.0723C51.6106 21.0723 51.6106 21.0723 51.6242 21.0586L52.2675 20.4156C52.7051 19.9777 52.9376 19.4032 52.9376 18.7875C52.9376 18.1719 52.6914 17.6109 52.2675 17.1731ZM57.3293 59.4346C57.7674 59.8727 58.3419 60.1051 58.9573 60.1051C59.5732 60.1051 60.1478 59.8727 60.5854 59.4346L75.9224 44.0844C76.8253 43.1814 76.8253 41.7313 75.9224 40.8282C75.4844 40.3903 74.9099 40.1578 74.2944 40.1578C73.6786 40.1578 73.104 40.3903 72.6664 40.8282L57.9862 55.5082C57.9862 55.5082 57.9862 55.5082 57.9862 55.5218C57.9862 55.5218 57.9862 55.5218 57.9726 55.5218L57.3293 56.165C56.8918 56.6026 56.6589 57.1775 56.6589 57.793C56.6589 58.4226 56.8918 58.9971 57.3293 59.4346ZM57.2338 53.2784L69.7657 40.7461L52.3494 23.3298L39.8173 35.8618L57.2338 53.2784ZM50.5162 49.557L43.648 42.6888C43.0736 43.8929 43.2787 45.384 44.2639 46.3692L46.8222 48.9275C47.8347 49.9264 49.3121 50.1316 50.5162 49.557ZM16.2033 77.0016C16.901 77.6993 17.8177 78.0686 18.8028 78.0414C19.7877 78.0141 20.6908 77.6038 21.3474 76.8646L45.1805 50.2685L42.9366 48.0246L16.3401 71.8709C15.615 72.5278 15.1909 73.4307 15.1635 74.416C15.1361 75.3872 15.5055 76.3174 16.2033 77.0016Z"
                      fill="white"></path>
                    <path
                      d="M70.61 22.9056C72.0879 24.3838 72.9044 26.362 72.8977 28.4704C72.8949 29.3739 72.1512 30.1176 71.2474 30.1205C70.344 30.1232 69.6049 29.3843 69.6194 28.4922C69.6116 27.2528 69.152 26.0958 68.2859 25.2298C67.4198 24.3869 66.2976 23.9155 65.1043 23.9308C64.1889 23.9453 63.4618 23.2177 63.4531 22.3027C63.4556 21.3991 64.1878 20.667 65.0915 20.6642C67.165 20.6461 69.1201 21.4392 70.5985 22.8941L70.61 22.9056Z"
                      fill="white"></path>
                    <path
                      d="M63.4766 14.8425C63.468 13.9505 64.2117 13.2069 65.1154 13.204C69.1466 13.1681 72.9411 14.7084 75.7934 17.5607L75.8281 17.5954C78.7036 20.4707 80.2899 24.3116 80.277 28.4123C80.2742 29.3159 79.5421 30.0479 78.6271 30.0624C77.7234 30.0652 76.9958 29.3378 76.9987 28.4342C77.0091 25.1906 75.7673 22.1828 73.504 19.9194L73.4809 19.8963C71.2523 17.6676 68.2676 16.4491 65.1167 16.4822C64.2129 16.4851 63.4853 15.7576 63.4766 14.8425Z"
                      fill="white"></path>
                    <path
                      d="M81.4159 11.8898C85.7924 16.2662 88.1952 22.1085 88.1873 28.3523C88.1845 29.2558 87.4523 29.9879 86.5486 29.9908C85.6452 29.9936 84.9176 29.2661 84.9206 28.3626C84.9375 22.9876 82.8682 17.9667 79.115 14.2137L79.0691 14.1675C75.339 10.4608 70.3987 8.44919 65.1395 8.48889C64.2362 8.49175 63.5087 7.76423 63.5 6.8723C63.5029 5.96874 64.2349 5.23667 65.1267 5.22228C71.2549 5.16826 77.0278 7.52478 81.3696 11.8435C81.3812 11.855 81.4044 11.8781 81.4159 11.8898Z"
                      fill="white"></path>
                    <defs>
                      <linearGradient id="paint0_linear_570_42845" x1="31.8051" y1="16.999" x2="94.5706"
                        y2="68.4074" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFD466"></stop>
                        <stop offset="1" stop-color="#FF9900"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div class="">
                <div class="font-bold text-25 mt-12 mb-4 ml--4">
                  <span>ĐẤU GIÁ TRỰC TUYẾN</span>
                </div>
                <span class="ml-8">TRUNG TÂM DỊCH VỤ ĐẤU GIÁ TÀI SẢN</span>
              </div>
            </div>

            <div class="flex justify-center">
              <div>
                <div class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path
                      d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <span class="ml-4">Số 99 Trần Bình, phường Mỹ Đình 2, quận Nam Từ
                    Liêm, thành phố Hà
                    Nội</span>
                </div>
                <div class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                  <span class="ml-4">0236 895 593</span>
                </div>
                <div class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path
                      d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                  </svg>
                  <span class="ml-4">daugiatructuyen@gmail.com</span>
                </div>
              </div>
              <div class="ml-60 text-18">
                <span class="font-bold">Thông tin chung</span>
                <div class="flex text-16">
                  <div class="mr-40 text-left">
                    <div class="">
                      <a href="" class=" text-decoration text-black hover-link-blue">Giới thiệu</a>
                    </div>
                    <div class="">
                      <a href="" class=" text-decoration text-black hover-link-blue">Thông tin đấu giá</a>
                    </div>

                  </div>
                  <div class=" text-left">
                    <div class="">
                      <a href="" class=" text-decoration text-black hover-link-blue">Hướng dẫn</a>
                    </div>
                    <div class="">
                      <a href="" class=" text-decoration text-black hover-link-blue">Tin tức</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.062035054602!2d105.77487271485434!3d21.030203685997517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b3c253bc87%3A0x1f8be1f3a4dac476!2zVGhlIEdhcmRlbiBoaWxsLCA5OSBQLiBUcuG6p24gQsOsbmgsIE3hu7kgxJDDrG5oLCBOYW0gVOG7qyBMacOqbSwgSMOgIE7hu5lpIDEwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1678091111407!5m2!1svi!2s"
              width="506px" height="200px" class="border-0" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
