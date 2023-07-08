// import Link from "next/link";
// import Image from "next/image";

// import CustomButton from "./CustomButton";

// const NavBar = () => (
//   <header className='w-full  absolute z-10'>
//     <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
//       <Link href='/' className='flex justify-center items-center'>
//         <Image
//           src='/logo.svg'
//           alt='logo'
//           width={118}
//           height={18}
//           className='object-contain'
//         />
//       </Link>

//       <CustomButton
//         title='Sign in'
//         btnType='button'
//         containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
//       />
//     </nav>
//   </header>
// );

// export default NavBar;

const NavBar = () => {
  return (
    // <h1>this is header</h1>
    <div className="w-full h-full">
      <div className=" h-[830px] w-[1300] p-4 bg-[#E3EDFE] mx-20 my-10 rounded-[50px]  text-black">
        <nav>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between ">
              <div className="flex flex-1 items-center justify-center sm:items-stretch">
                <div className="hidden flex sm:ml-6 sm:block">
                  <div className="flex space-x-9">
                      {/* <button type="button" className="rounded-full bg-[#FFFFFF] relative z-40 ml-6 my-1 p-1.5 text-[#FFFFFF] text-[14px] hover:text-white focus:outline-none focus:ring-1 focus:ring-#4385F6 focus:ring-offset-1 Pl-5 focus:ring-offset-[#4385F6]"> */}
                        <button type="button" className="rounded-full text-[#4385F6] absolute z-40 ml-6 my-1 p-1.5 bg-[#FFFFFF] text-[14px] hover:text-white focus:outline-none focus:ring-1 focus:ring-#4385F6 focus:ring-offset-1 Pl-5 focus:ring-offset-[#4385F6]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                        </button>
                      {/* </button> */}
                    <button className="rounded-full bg-[#4385F6] font-[700] text-[16px] px-11 py-3 relative text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4385F6] focus:ring-offset-2 focus:ring-offset-[#4385F6]">ورود و ثبت نام</button>
                    <a href="#" className="text-[#212121] font-[400] rounded-md px-3 py-2 text-[14px]">بلاگ</a>
                    <a href="#" className="text-[#212121] font-[400] rounded-md px-3 py-2 text-[14px]">همکاری با ما</a>
                    <a href="#" className="text-[#212121] font-[400] rounded-md px-3 py-2 text-[14px]">کلاس های خصوصی</a>
                    <a href="#" className="text-[#212121] font-[400] rounded-md px-3 py-2 text-[14px]">سطح بندی</a>
                    <a href="#" className="text-[#212121] font-[400] rounded-md px-3 py-2 text-[14px]">آیلتس</a>
                    <a href="#" className="text-[#212121] font-[400] rounded-md px-3 py-2 text-[14px]">دوره های خود آموز</a>
                  </div>
                </div>
                
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="">
                    <p className="flex  justify-end font-[900] text-[18px]">موسسه سفیر</p>
                    <p className="flex  justify-end font-[400] text-[12px]">آموزش زبان های خارجی</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <br/>
        <div className="flex items-center  mt-[252px] mr-[221px] justify-between bg-red">
          {/* <img src="../../public/aghayiiii.png"/> */}
          <div></div>
          <div className="">
            <p className="flex justify-end font-[900] text-[30px] mt-[300x]"> آموزش آنلاین زبان</p>
            <p className="flex justify-end font-[900] text-[30px]">همیشه و همه جا , با استادی که دوست داری</p>
            <p className="flex justify-end font-[500] text-[20px] mt-[30px]">همسوترین استاد با اهداف و نیازهایت را از بین صدها استاد ارزیابی شده </p>
            <p className="flex justify-end font-[500] text-[20px]">انتخاب کن و در زمان دلخواه در کلاس زبان آنلاین ثبت نام کن</p>
            <div className="flex justify-end   space-x-9 mt-[50px]">
            <button type="button" className=" rounded-full text-[#F8BD07] absolute z-40 mr-[176px] my-1 p-1.5 bg-[#FFFFFF] text-[14px] hover:text-white focus:outline-none focus:ring-1 focus:ring-#4385F6 focus:ring-offset-1 Pl-5 focus:ring-offset-[#4385F6]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
            </button>
            <button className="rounded-full flex justify-start bg-[#F8BD07]  text-[16px] font-[700] px-11 py-3 relative text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4385F6] focus:ring-offset-2 focus:ring-offset-[#4385F6]">همین حالا شروع کن</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
