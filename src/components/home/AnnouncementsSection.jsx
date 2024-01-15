import React from "react";
import MainSection from "../ui/sections/MainSection";
import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import AnnouncementCard from "../ui/cards/AnnouncementCard";
import { useSelector } from "react-redux";
import Loader from "../ui/loading/Loader";

export default function AnnouncementsSection() {
  const { status, announcements } = useSelector((state) => state.announcement);
  const [t] = useTranslation("global");
  const cardList =
    announcements.length > 0 ? (
      announcements.map((item) => (
        <SwiperSlide key={item.id}>
          <AnnouncementCard
            image={item.image}
            startDate={item.startDate}
            endDate={item.endDate}
            id={item.id}
            status={item.status}
          />
        </SwiperSlide>
      ))
    ) : (
      <Box
        sx={{
          height: "30vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="110"
          height="110"
          viewBox="0 0 110 110"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M89.375 61.2168H20.625V93.0343C20.6248 93.7736 20.863 94.4933 21.3042 95.0865C21.7454 95.6797 22.3661 96.1149 23.0742 96.3274L54.0117 105.609C54.6565 105.801 55.3435 105.801 55.9883 105.609L86.9258 96.3274C87.6339 96.1149 88.2546 95.6797 88.6958 95.0865C89.137 94.4933 89.3752 93.7736 89.375 93.0343V61.2168Z"
            fill="#CADCF0"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M89.3748 61.2168H54.9998C54.9998 61.2168 54.6663 105.753 54.9998 105.753C55.3332 105.753 55.6649 105.705 55.988 105.609L86.9255 96.3274C87.6336 96.1149 88.2543 95.6797 88.6955 95.0865C89.1367 94.4933 89.3749 93.7736 89.3748 93.0343V61.2168Z"
            fill="#A4BBDB"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M55.0016 72.3698L20.6266 61.2168L11.9039 74.1487C11.7548 74.3694 11.6591 74.6217 11.6242 74.8857C11.5893 75.1498 11.6163 75.4183 11.7029 75.6702C11.7896 75.922 11.9336 76.1502 12.1236 76.3369C12.3136 76.5236 12.5444 76.6635 12.7977 76.7457L43.7266 86.7935C44.081 86.9087 44.4632 86.9057 44.8157 86.7847C45.1681 86.6638 45.4718 86.4317 45.6808 86.1232L55.0016 72.3698ZM89.3766 61.2168L55.0016 72.3698L64.3224 86.1232C64.5314 86.4317 64.8351 86.6638 65.1875 86.7847C65.54 86.9057 65.9222 86.9087 66.2766 86.7935L97.2055 76.7457C97.4588 76.6635 97.6896 76.5236 97.8796 76.3369C98.0696 76.1502 98.2136 75.922 98.3003 75.6702C98.3869 75.4183 98.4139 75.1498 98.379 74.8857C98.3441 74.6217 98.2484 74.3694 98.0993 74.1487L89.3766 61.2168Z"
            fill="#E9F3FC"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46.6818 37.7884C46.4724 37.4809 46.1688 37.2496 45.8168 37.1294C45.4647 37.0091 45.0831 37.0063 44.7293 37.1215L13.7987 47.171C13.5452 47.2527 13.3142 47.3923 13.124 47.5787C12.9338 47.7652 12.7896 47.9934 12.7028 48.2452C12.6161 48.497 12.5892 48.7656 12.6243 49.0296C12.6594 49.2936 12.7555 49.5459 12.905 49.7663L20.6273 61.2166L55.0023 50.0259L46.6818 37.7884Z"
            fill="#CADCF0"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M97.0973 49.7663C97.2461 49.5457 97.3416 49.2935 97.3763 49.0297C97.411 48.7658 97.3839 48.4975 97.2973 48.2459C97.2106 47.9943 97.0668 47.7663 96.877 47.5797C96.6872 47.3932 96.4567 47.2533 96.2036 47.171L65.273 37.1215C64.9192 37.0063 64.5376 37.0091 64.1855 37.1294C63.8334 37.2496 63.5299 37.4809 63.3205 37.7884L55 50.0259L89.375 61.2166L97.0973 49.7663Z"
            fill="#E9F3FC"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M89.375 61.2167L55 50.0259L20.625 61.2167L55 72.3696L89.375 61.2167Z"
            fill="#CADCF0"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M55 72.3696V50.0259L20.625 61.2167L55 72.3696Z"
            fill="#A4BBDB"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48.0955 54.9623C47.4123 54.5181 46.7662 54.0192 46.1637 53.4704C45.8259 53.1752 45.3861 53.0237 44.9382 53.0484C44.4902 53.073 44.0697 53.2718 43.7664 53.6023C43.463 53.9328 43.3009 54.3688 43.3146 54.8172C43.3284 55.2656 43.5169 55.6908 43.8399 56.0021C44.5429 56.6484 45.3352 57.2637 46.2152 57.8395C46.5967 58.0808 47.0578 58.1623 47.499 58.0664C47.9401 57.9705 48.3258 57.705 48.5727 57.3271C48.8196 56.9493 48.908 56.4894 48.8187 56.0469C48.7295 55.6044 48.4697 55.2148 48.0955 54.9623ZM42.7399 49.6823C42.2515 49.0241 41.818 48.3268 41.444 47.5974C41.2373 47.1911 40.8776 46.8834 40.444 46.7423C40.0105 46.6011 39.5386 46.6379 39.1323 46.8446C38.7259 47.0513 38.4183 47.411 38.2771 47.8446C38.1359 48.2781 38.1727 48.75 38.3794 49.1563C38.816 50.0123 39.3454 50.8699 39.9727 51.7207C40.2464 52.0785 40.6496 52.3146 41.0956 52.3781C41.5415 52.4416 41.9946 52.3275 42.3573 52.0603C42.72 51.7932 42.9633 51.3943 43.0348 50.9495C43.1064 50.5048 43.0005 50.0497 42.7399 49.6823ZM40.2271 42.6681C40.2443 41.9754 40.3457 41.3034 40.5313 40.6588C40.5935 40.4418 40.6123 40.2147 40.5867 39.9904C40.5611 39.7661 40.4916 39.549 40.3821 39.3516C40.2726 39.1542 40.1253 38.9803 39.9486 38.8398C39.7719 38.6993 39.5693 38.5949 39.3523 38.5328C39.1352 38.4706 38.9081 38.4517 38.6838 38.4773C38.4595 38.5029 38.2424 38.5725 38.045 38.682C37.8476 38.7914 37.6737 38.9387 37.5332 39.1154C37.3927 39.2921 37.2883 39.4948 37.2262 39.7118C36.9603 40.6464 36.8136 41.6108 36.7896 42.5821C36.7782 43.038 36.9484 43.4797 37.2626 43.8101C37.5769 44.1404 38.0095 44.3324 38.4654 44.3438C38.9212 44.3552 39.3629 44.1851 39.6933 43.8708C40.0237 43.5565 40.2157 43.1239 40.2271 42.6681ZM42.8705 36.9274C43.3123 36.5184 43.8073 36.1402 44.3487 35.7982C44.5396 35.6778 44.705 35.521 44.8353 35.3366C44.9656 35.1523 45.0584 34.9441 45.1083 34.7239C45.1581 34.5038 45.1642 34.2759 45.126 34.0534C45.0878 33.831 45.0062 33.6182 44.8858 33.4272C44.7654 33.2363 44.6085 33.0709 44.4242 32.9406C44.2399 32.8102 44.0317 32.7175 43.8115 32.6676C43.5913 32.6177 43.3635 32.6117 43.141 32.6499C42.9185 32.6881 42.7057 32.7697 42.5148 32.8901C41.8094 33.3332 41.1466 33.8407 40.5348 34.406C40.2088 34.7178 40.0185 35.1453 40.0049 35.5961C39.9913 36.047 40.1555 36.4851 40.462 36.816C40.7686 37.1469 41.1929 37.3441 41.6435 37.3649C42.094 37.3857 42.5348 37.2286 42.8705 36.9274ZM49.2626 33.9626C50.1698 33.7969 51.0876 33.6958 52.0091 33.6601C52.4538 33.6258 52.8678 33.4201 53.1638 33.0864C53.4598 32.7528 53.6146 32.3172 53.5957 31.8716C53.5767 31.426 53.3854 31.0052 53.0622 30.6979C52.739 30.3906 52.309 30.2208 51.863 30.2243C50.7287 30.2724 49.6527 30.3945 48.6369 30.5818C48.1886 30.6648 47.7916 30.9224 47.5333 31.2981C47.2749 31.6738 47.1764 32.1367 47.2594 32.585C47.3423 33.0333 47.6 33.4303 47.9757 33.6887C48.3513 33.947 48.8142 34.0456 49.2626 33.9626ZM58.2207 33.8612C59.6868 33.8784 61.0515 33.8268 62.3182 33.7151C62.7681 33.6695 63.1819 33.4485 63.4699 33.1C63.7579 32.7514 63.897 32.3034 63.857 31.853C63.817 31.4026 63.6011 30.9861 63.2561 30.6938C62.9111 30.4015 62.4648 30.2569 62.014 30.2913C60.8538 30.3928 59.6043 30.4409 58.2602 30.4237C57.8044 30.4184 57.3651 30.5945 57.0391 30.9131C56.7131 31.2317 56.527 31.6668 56.5217 32.1227C56.5165 32.5785 56.6925 33.0178 57.0111 33.3438C57.3298 33.6698 57.7649 33.8559 58.2207 33.8612ZM67.9677 32.6615C69.6693 32.1407 71.1062 31.4738 72.3093 30.709C72.4997 30.5877 72.6643 30.43 72.7938 30.2451C72.9232 30.0602 73.015 29.8515 73.0638 29.6311C73.1127 29.4107 73.1176 29.1829 73.0784 28.9605C73.0392 28.7382 72.9565 28.5258 72.8352 28.3354C72.7139 28.145 72.5563 27.9804 72.3713 27.8509C72.1864 27.7215 71.9778 27.6297 71.7574 27.5809C71.5369 27.532 71.3091 27.5271 71.0868 27.5663C70.8644 27.6055 70.652 27.6882 70.4616 27.8095C69.3708 28.4858 68.1938 29.0119 66.9623 29.3735C66.5262 29.5069 66.1611 29.8079 65.947 30.2105C65.733 30.6131 65.6877 31.0842 65.821 31.5203C65.9543 31.9563 66.2554 32.3214 66.658 32.5355C67.0606 32.7495 67.5317 32.7948 67.9677 32.6615ZM76.7162 25.8982C77.4895 24.2919 77.8482 22.5174 77.7594 20.7368C77.749 20.5113 77.6941 20.2901 77.5982 20.0858C77.5022 19.8815 77.3669 19.6981 77.2 19.5461C77.0332 19.3941 76.838 19.2764 76.6257 19.1998C76.4133 19.1232 76.188 19.0892 75.9625 19.0997C75.737 19.1102 75.5158 19.165 75.3115 19.261C75.1072 19.357 74.9238 19.4923 74.7718 19.6591C74.6198 19.826 74.5021 20.0212 74.4255 20.2335C74.3489 20.4458 74.3149 20.6712 74.3254 20.8967C74.3872 22.1059 74.1449 23.3114 73.6207 24.4029C73.4453 24.8101 73.4339 25.2694 73.5888 25.6848C73.7438 26.1003 74.0532 26.4398 74.4525 26.6327C74.8517 26.8256 75.31 26.8569 75.7318 26.72C76.1536 26.5832 76.5062 26.2888 76.7162 25.8982ZM75.6213 14.6593C74.3684 12.9663 72.6685 11.7873 70.8157 11.4074C70.376 11.333 69.9245 11.4322 69.5565 11.6842C69.1885 11.9362 68.9328 12.3212 68.8432 12.7581C68.7536 13.195 68.8371 13.6496 69.0762 14.0261C69.3153 14.4026 69.6912 14.6715 70.1248 14.7762C71.1938 14.9945 72.1357 15.7284 72.8593 16.7063C72.9937 16.8877 73.1625 17.0408 73.3561 17.1569C73.5497 17.273 73.7642 17.3499 73.9875 17.3831C74.2108 17.4163 74.4384 17.4052 74.6574 17.3504C74.8764 17.2956 75.0825 17.1983 75.2638 17.0638C75.4452 16.9294 75.5983 16.7606 75.7144 16.567C75.8305 16.3735 75.9074 16.1589 75.9406 15.9356C75.9738 15.7123 75.9627 15.4847 75.9079 15.2657C75.8531 15.0467 75.7557 14.8407 75.6213 14.6593Z"
            fill="#347BFA"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53.168 11.7407C55.0277 1.2099 71.1444 1.89053 61.7617 11.7407H53.168ZM53.168 14.4082C55.0277 24.9372 71.1444 24.2583 61.7617 14.4082H53.168Z"
            fill="#CADCF0"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53.0147 14.8105H64.5234C64.9793 14.8105 65.4164 14.6295 65.7388 14.3071C66.0611 13.9848 66.2422 13.5476 66.2422 13.0918C66.2422 12.636 66.0611 12.1988 65.7388 11.8765C65.4164 11.5541 64.9793 11.373 64.5234 11.373H53.0147C52.5721 11.3928 52.1543 11.5826 51.8481 11.9027C51.542 12.2229 51.3711 12.6488 51.3711 13.0918C51.3711 13.5348 51.542 13.9607 51.8481 14.2809C52.1543 14.601 52.5721 14.7908 53.0147 14.8105Z"
            fill="#347BFA"
          />
        </svg>
        <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
          {t("home.special_announcements.no_announcements")}
        </Typography>
      </Box>
    );
  return (
    <MainSection name={"announcements"}>
      <Container maxWidth={"xl"}>
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "17px 20px",
            borderRadius: "9px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{ fontSize: "16px", fontWeight: "700" }}
              variant="h5"
            >
              {t("home.special_announcements.title")}
            </Typography>

            <Link to="/announcments" style={{ color: "#377DFF" }}>
              {t("home.special_news.more")}
            </Link>
          </Box>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            breakpoints={{
              520: {
                slidesPerView: 2,
              },
              996: {
                slidesPerView: 3,
              },
            }}
            dir={document.body.dir}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            style={{ marginTop: "10px" }}
          >
            {status === "pending" ? <Loader /> : cardList}
          </Swiper>
        </Box>
      </Container>
    </MainSection>
  );
}
