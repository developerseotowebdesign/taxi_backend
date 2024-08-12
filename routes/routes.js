import express from "express";
import {
  Adminlogin,
  getAllGalleryController,
  deleteGalleryController,
  AddAdminBlogController,
  AdmindeleteBlogController,
  AddAdminCategoryController,
  getAllReviewsAdmin,
  AdmingetAllCategories,
  AddAdminProduct,
  getAllcategoryFillAdmin,
  updateCategoryAdmin,
  getCategoryIdAdmin,
  deleteCategoryAdmin,
  getAllProductFillAdmin,
  updateProductAdmin,
  getProductIdAdmin,
  deleteProductAdmin,
  AddAdminPromoController,
  getAllPromoAdmin,
  updatePromoAdmin,
  getPromoIdAdmin,
  deletePromoAdmin,
  editOrderDriverAdmin,
  AdminGetAllDriver,
  AdminGetAllVendor,
  ChangePassAdmin,
  ForgotAdminPassword,
  editOrderAdmin,
  deleteOrderAdmin,
  AddAdminPageController,
  getAllPageAdmin,
  updatePageAdmin,
  getPageIdAdmin,
  deletePageAdmin,
  getAllBlogAdmin,
  exportAllProAdmin,
  importAllProAdmin,
  getAllUserAdmin,
  AddAdminTaxController,
  getAllTaxAdmin,
  updateTaxAdmin,
  getTaxIdAdmin,
  deleteTaxAdmin,
  ViewAllAdminZones,
  AddAdminZonesController,
  getAllZonesAdmin,
  updateZonesAdmin,
  getZonesIdAdmin,
  deleteZonesAdmin,
  GetImageAdmin,
  deleteFolderAdmin,
  UpdateFolderAdmin,
  getUserIdAdmin,
  GetFolderIDAdmin,
  AddAdminFolderController,
  GetFolderAdmin,
  editUserAdmin,
  AddAdminAttributeController,
  deleteRatingAdmin,
  editReviewAdmin,
  getAllOrderAdmin,
  getAllAttributeFillAdmin,
  updateAttributeAdmin,
  getAttributeIdAdmin,
  deleteAttributeAdmin,
  getAllAttribute,
  AddAdminTagController,
  getAllTagFillAdmin,
  updateTagAdmin,
  getTagIdAdmin,
  deleteTagAdmin,
  getAllTag,
  editHomeData,
  editHomeLayoutData, getAllValetAdmin, editOrderVendorAdmin, AdminUpdateWallet,
  AdminCreateValetController, deleteValetAdmin,
} from "../controller/adminController.js";
import {
  SignupUserImage,
  SignupUserType,
  getAllBookRide,
  AddMessage,
  AddMessageOrder,
  AddNotification,
  GetUserMessage,
  GetUserMessageOrder,
  GetUserNotification,
  findDistanceApi,
  AddCart,
  contactEnquire,
  razorpayCallback,
  UpdateCart,
  getCart,
  userTokenController,
  userBlogsController,
  Userlogin,
  SignupUser,
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  deleteBlogController,
  getBlogIdController,
  CreateChatController,
  findUserschatController,
  findchatController,
  AllTransaction,
  AddWallet,
  StartOrderVerifyRide,
  EndOrderVerifyRide,
  EndOrderRide,
  StartOrderRide,
  DeleteNotification,
  GetUsernameById,
  AllBookingsByDriver,
  AcceptOrderDriver,
  RejectOrderDriver,
  EmailVerify,
  PaymentResponse,
  postman,
  PaymentRequest,
  getProductsByFilterUser,
  cancelOrderUser,
  ViewAllZones,
  getProductsByHSN,
  AuthUserByID,
  AuthUserByPhone,
  updateProfileUser,
  SignupNewUser,
  LoginUserWithOTP,
  LoginUserWithPass,
  SendOTP,
  SignupLoginUser,
  getTaxIdUser,
  ViewAllUserTaxes,
  ViewCompareByUser,
  applyPromoCode,
  getHomeLayoutData,
  AddWishListByUser,
  deleteCompareByUser,
  deleteWishListByUser,
  ViewWishListByUser,
  AddCompareByUser,
  ViewProductRating,
  ViewCategoryRating,
  AddRating,
  UsergetAllCategories,
  UsergetAllProducts,
  UsergetAllHomeProducts,
  DriverOrdersViewController,
  userOrdersViewController,
  getAllAttributeUser,
  getProductIdUser,
  updateUserController,
  createOrderController,
  updateUserAndCreateOrderController,
  updateUserAndCreateValetController,
  userOrdersController,
  getHomeData,
  GetAllCategoriesByParentIdController,
  getAllBookValet,
  AcceptValetVendor,
  AllValetByVendor,
  userValetViewController,
  AddDriverVendor,
  AllDriversByVendor,
  AssignedDriverValet,
  StartValetRide,
  EndValetRide,
  StartValetVerifyRide,
  EndValetVerifyRide,
  valetUpdateDailyCost,
  AllValetByDriver,
  SignupUserCarImage,
  UpdateUserCarImage,
  SignupUserValetType,
  CreateValetRide,
  userValetRideUserController,
  userValetRideUserControllerById,
  ValetRideUserController,
  ValetRideNotiUserController,
  driverValeRideViewController,
  vendorValeRideViewController,
  driverValetViewController,
  UpdateUserValetType,
  UpdateUserValetRide,
  UpdateUserCancelOrder,
  LoginAndVerifyOTP,
  AllValetByUser, AllValetServiceByUser,
  userValetParkingUserController, userAdminValet,
  userAdminValetId,
  editValetRidePayment,
  handleImageCompression,
  UpdateUserReviewOrder,
  UnAssignedDriverValet,
  AssignedDriverValetRide,
  UserAllValtRides,
  UpdateUserValetRideVerifyOTP,
  UpdateUserValetRideKey
} from "../controller/userController.js";
import authenticateToken from "../middleware/authMiddleware.js";
import {
  uploadImage,
  handleImageUpload,
} from "../controller/adminController.js";

const router = express.Router();

// Middleware function to check if the request is coming from an authorized domain
function checkOrigin(req, res, next) {
  const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://localhost:443",
    "https://localhost:80",
    "https://taxi.delhiexpert.com",
    "https://localhost:5559",
    "https://valetwale.in"
  ]; // Add your authorized domains here
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    next();
  } else {
    const secretKey = process.env.Authtoken;

    const token = req.header("x-auth-token");

    // Check if no token or token doesn't match
    if (!token || token !== secretKey) {
      res.status(403).json({ error: "Unauthorized domain" });
    } else {
      next();
    }
  }
}

// Middleware function to check if the request is using HTTPS protocol
function checkHttps(req, res, next) {
  if (req.protocol === "https") {
    next();
  } else {
    res.status(403).json({ error: "HTTPS required" });
  }
}

// user routes

router.post("/api/find-distance/", findDistanceApi);

// admin routes

router.post("/admin/forgot", ForgotAdminPassword);
router.post("/admin/change-pass", ChangePassAdmin);
router.post("/admin", Adminlogin);
router.post("/admin/upload-img", uploadImage, handleImageUpload);
router.get("/admin/allgallery", getAllGalleryController);
router.delete("/admin/delete-gallery/:id", deleteGalleryController);

router.post("/admin/addBlog", AddAdminBlogController);
router.get("/admin/all-blogs", getAllBlogAdmin);

router.post("/admin/update-blog/:id", AddAdminBlogController);
router.delete("/admin/delete-blog/:id", AdmindeleteBlogController);

router.post("/admin/add-category", AddAdminCategoryController);
router.get("/all/category/:parentId", GetAllCategoriesByParentIdController);
router.get("/all-category", UsergetAllCategories);
router.get("/all-products", UsergetAllProducts);
router.get("/all-home-products", UsergetAllHomeProducts);

router.get("/all-drivers", AdminGetAllDriver);
router.get("/all-vendors", AdminGetAllVendor);
router.get("/all-valet-rides/:valetId", UserAllValtRides);

router.get("/admin/all-category-fillter", getAllcategoryFillAdmin);
router.get("/admin/get-category/:id", getCategoryIdAdmin);
router.put("/admin/update-category/:id", updateCategoryAdmin);
router.delete("/admin/delete-category/:id", deleteCategoryAdmin);

router.post("/admin/add-product", AddAdminProduct);
router.get("/admin/all-product-fillter", getAllProductFillAdmin);
router.get("/admin/get-product/:id", getProductIdAdmin);
router.put("/admin/update-product/:id", updateProductAdmin);
router.delete("/admin/delete-product/:id", deleteProductAdmin);

router.post("/admin/add-attribute", AddAdminAttributeController);
router.get("/admin/all-attribute-fillter", getAllAttributeFillAdmin);
router.get("/admin/get-attribute/:id", getAttributeIdAdmin);
router.put("/admin/update-attribute/:id", updateAttributeAdmin);
router.delete("/admin/delete-attribute/:id", deleteAttributeAdmin);
router.get("/admin/all-attribute", getAllAttribute);

router.post("/admin/add-tag", AddAdminTagController);
router.get("/admin/all-tag-fillter", getAllTagFillAdmin);
router.get("/admin/get-tag/:id", getTagIdAdmin);
router.put("/admin/update-tag/:id", updateTagAdmin);
router.delete("/admin/delete-tag/:id", deleteTagAdmin);
router.get("/admin/all-tag", getAllTag);

// home settings Admin
router.put("/admin/edit-home", editHomeData);
router.put("/admin/edit-home-layout", editHomeLayoutData);

// review admin
router.get("/admin/all-review", getAllReviewsAdmin);

router.put("/admin/update-rating/:id", editReviewAdmin);
router.delete("/admin/delete-rating/:id", deleteRatingAdmin);

// order Admin

router.get("/admin/all-order", getAllOrderAdmin);
router.put("/admin/update-order/:id", editOrderAdmin);

router.get("/admin/all-valet", getAllValetAdmin);
router.put("/admin/update-order/:id", editOrderAdmin);



// user Admin
router.put("/admin/update-driver-order/:id/", editOrderDriverAdmin);
router.put("/admin/update-vendor-order/:id/", editOrderVendorAdmin);


router.get("/admin/all-user", getAllUserAdmin);
router.put("/admin/update-user/:id", editUserAdmin);
router.get("/admin/get-user/:id", getUserIdAdmin);

// Folder Admin

router.post("/admin/add-folder", AddAdminFolderController);
router.get("/admin/get-folder", GetFolderAdmin);
router.get("/admin/get-folder/:id", GetFolderIDAdmin);
router.put("/admin/update-folder/:id", UpdateFolderAdmin);
router.delete("/admin/delete-folder/:id", deleteFolderAdmin);

// for Zones

router.post("/admin/add-zones", AddAdminZonesController);
router.get("/admin/all-zones", getAllZonesAdmin);
router.get("/admin/get-zones/:id", getZonesIdAdmin);
router.put("/admin/update-zones/:id", updateZonesAdmin);
router.delete("/admin/delete-zones/:id", deleteZonesAdmin);
router.get("/admin/get-all-zones", ViewAllAdminZones);

// for Taxes

router.post("/admin/add-tax", AddAdminTaxController);
router.get("/admin/all-tax", getAllTaxAdmin);
router.get("/admin/get-tax/:id", getTaxIdAdmin);
router.put("/admin/update-tax/:id", updateTaxAdmin);
router.delete("/admin/delete-tax/:id", deleteTaxAdmin);

// for promo code

router.post("/admin/add-promo", AddAdminPromoController);
router.get("/admin/all-promo", getAllPromoAdmin);
router.get("/admin/get-promo/:id", getPromoIdAdmin);
router.put("/admin/update-promo/:id", updatePromoAdmin);
router.delete("/admin/delete-promo/:id", deletePromoAdmin);

// for order delete
router.delete("/admin/delete-order/:id", deleteOrderAdmin);

// for valet delete
router.delete("/admin/delete-valet/:id", deleteValetAdmin);

// for page

router.post("/admin/add-page", AddAdminPageController);
router.get("/admin/all-page", getAllPageAdmin);
router.get("/admin/get-page/:id", getPageIdAdmin);
router.put("/admin/update-page/:id", updatePageAdmin);
router.delete("/admin/delete-page/:id", deletePageAdmin);

router.get("/admin/get-image", GetImageAdmin);

router.post(
  "/admin/create-valet-order/",
  checkOrigin,
  AdminCreateValetController
);





// for export admin

router.get("/admin/export/allproducts/", exportAllProAdmin);
router.post("/admin/import/allproducts/", importAllProAdmin);

router.post("/admin/update-wallet", checkOrigin, AdminUpdateWallet);

// --------------------    user routes start  -------------------//

router.post("/signup-user-type", checkOrigin, SignupUserImage, SignupUserType);
router.post(
  "/signup-user-car-type",
  checkOrigin,
  SignupUserCarImage,
  SignupUserValetType
);


router.post(
  "/create-valet-ride",
  checkOrigin,
  CreateValetRide
);

router.put("/update-valet-ride-payment/:id", editValetRidePayment);


router.post(
  "/update-user-car-type",
  checkOrigin,
  UpdateUserCarImage,
  UpdateUserValetType
);

router.get(
  "/user-valet-ride-view/:driverId/:valetId",
  checkOrigin,
  userValetRideUserController
);

router.get(
  "/user-valet-ride-view-id/:valetId",
  checkOrigin,
  userValetRideUserControllerById
);


router.get(
  "/get-car/:valetId",
  checkOrigin,
  ValetRideUserController
);

router.get(
  "/send-car-noti/:valetId",
  checkOrigin,
  ValetRideNotiUserController
);

// router.post("/signup", checkOrigin, SignupUser);
router.post("/login", checkOrigin, Userlogin);

//router.post('/create-order', createOrderController);
router.post(
  "/create-order/:id",
  checkOrigin,
  updateUserAndCreateOrderController
);

router.put("/cancel-order", checkOrigin, UpdateUserCancelOrder);
router.put("/cancel-valet", checkOrigin, UpdateUserCancelOrder);
router.put("/review-order", checkOrigin, UpdateUserReviewOrder);



router.post(
  "/create-valet-order/",
  checkOrigin,
  updateUserAndCreateValetController
);

router.post("/razorpayCallback", checkOrigin, razorpayCallback);

router.put("/cancel-order/:id", checkOrigin, cancelOrderUser);

router.get("/user-orders/:id", checkOrigin, userOrdersController);

router.get(
  "/driver-orders-view/:userId/:orderId",
  checkOrigin,
  DriverOrdersViewController
);
router.get(
  "/user-orders-view/:userId/:orderId",
  checkOrigin,
  userOrdersViewController
);

router.post("/payment-request", checkOrigin, PaymentRequest);
router.post("/payment-response", checkOrigin, PaymentResponse);

router.get("/update-stuck-order/:id", checkOrigin, postman);

router.post("/add-message", checkOrigin, AddMessage);
router.post("/add-message-orderid", checkOrigin, AddMessageOrder);

router.get("/get-message/:userId/:senderId", checkOrigin, GetUserMessage);
router.get(
  "/get-message-orderid/:userId/:senderId/:orderId",
  checkOrigin,
  GetUserMessageOrder
);

router.post("/add-notification", checkOrigin, AddNotification);
router.delete("/delete-notification/:id", checkOrigin, DeleteNotification);
router.get("/get-notification/:userId/", checkOrigin, GetUserNotification);

router.post("/add-wallet", checkOrigin, AddWallet);

router.get("/all-transaction/:userId/", checkOrigin, AllTransaction);

router.post("/add-cart", checkOrigin, AddCart);
router.get("/get-cart/:id", checkOrigin, getCart);

router.put("/update-cart/:id", checkOrigin, UpdateCart);

router.get("/all-blogs", checkOrigin, getAllBlogsController);

router.put("/update-user/:id", updateUserController);
router.put("/update-profile/:id", SignupUserImage, updateProfileUser);

router.post("/create-blog", createBlogController);
router.put("/update-blog/:id", updateBlogController);
router.get("/get-blog/:id", getBlogIdController);
router.delete("/delete-blog/:id", deleteBlogController);

router.post("/create-chat", CreateChatController);
router.get("/find-chats/:id", findUserschatController);
router.get("/find-chat/:firstId/:secondId", findchatController);

// get blog by user
router.get("/validatetoken/:id", checkOrigin, userTokenController);

router.get("/user-blogs/:id", checkOrigin, userBlogsController);

router.get("/user-product/:id", checkOrigin, getProductIdUser);
router.get("/all-attribute", checkOrigin, getAllAttributeUser);

// home settings user
router.get("/home-data", checkOrigin, getHomeData);

router.get("/home-layout-data", checkOrigin, getHomeLayoutData);

router.post("/add-rating", checkOrigin, AddRating);

router.get("/view-product-rating/:id", checkOrigin, ViewProductRating);

router.get("/all-rating/", checkOrigin, ViewCategoryRating);

router.post("/add-wishlist", checkOrigin, AddWishListByUser);

router.post("/add-compare", checkOrigin, AddCompareByUser);

router.delete("/delete-compare/:id", checkOrigin, deleteCompareByUser);

router.get("/view-wishlist/:id", checkOrigin, ViewWishListByUser);

router.get("/view-compare/:id", checkOrigin, ViewCompareByUser);

router.delete("/delete-wishlist/:id", checkOrigin, deleteWishListByUser);

router.post("/apply-promo", checkOrigin, applyPromoCode);

router.get("/get-all-zones", checkOrigin, ViewAllZones);
router.get("/get-all-taxes", checkOrigin, ViewAllUserTaxes);
router.get("/get-tax/:id", checkOrigin, getTaxIdUser);

router.post("/send-otp/", checkOrigin, SendOTP);

router.post("/email-verify/", EmailVerify);

router.post("/signup-login-otp/", checkOrigin, SignupLoginUser);

router.post("/login-with-pass/", checkOrigin, LoginUserWithPass);

router.post("/login-with-otp/", checkOrigin, LoginUserWithOTP);

router.post("/signup-new-user/", checkOrigin, SignupNewUser);

router.post("/auth-user/", checkOrigin, AuthUserByID);
router.get("/auth-user-phone/:phone", checkOrigin, AuthUserByPhone);


router.post("/contact-enquire/", checkOrigin, contactEnquire);

// for get product varient

router.get("/products-variations-hsn/:id", checkOrigin, getProductsByHSN);

router.get(
  "/products-variations-fillter/",
  checkOrigin,
  getProductsByFilterUser
);

router.get("/get-username/:id", checkOrigin, GetUsernameById);

router.get("/all-valet-user/:id", checkOrigin, AllValetByUser);
router.get("/all-valet-service-user/:id", checkOrigin, AllValetServiceByUser);

// for Driver ride

router.get("/get-all-ride/:id", checkOrigin, getAllBookRide);

router.post("/accept-order/", checkOrigin, AcceptOrderDriver);

router.post("/reject-order/", checkOrigin, RejectOrderDriver);

router.get("/all-orders-driver/:id", checkOrigin, AllBookingsByDriver);

router.get("/start-ride-request/:id/", checkOrigin, StartOrderRide);
router.get("/end-ride-request/:id/", checkOrigin, EndOrderRide);

router.get("/start-ride-verify/:id/", checkOrigin, StartOrderVerifyRide);
router.post("/end-ride-verify/:id/", checkOrigin, EndOrderVerifyRide);
router.get("/all-valet-driver/:id/:type", checkOrigin, AllValetByDriver);

router.get(
  "/driver-valet-ride-view/:valetId",
  checkOrigin,
  driverValeRideViewController
);

router.get(
  "/vendor-valet-ride-view/:valetId",
  checkOrigin,
  vendorValeRideViewController
);


router.get(
  "/user-valet-parking-view/:userId/:valetId",
  checkOrigin,
  userValetParkingUserController
);


// for vendor

router.get("/user-admin-valet/", checkOrigin, userAdminValet);

router.get("/user-admin-valet/:id", checkOrigin, userAdminValetId);


router.get("/get-all-valet/:id", checkOrigin, getAllBookValet);

router.post("/accept-valet", checkOrigin, AcceptValetVendor);

router.get("/all-valet-vendor/:id/:type", checkOrigin, AllValetByVendor);
router.get("/all-drivers-vendor/:id", checkOrigin, AllDriversByVendor);

router.get(
  "/user-valet-view/:valetId",
  checkOrigin,
  userValetViewController
);
router.get(
  "/driver-valet-view/:driverId/:valetId",
  checkOrigin,
  driverValetViewController
);

router.post(
  "/add-driver-vendor",
  checkOrigin,
  SignupUserImage,
  AddDriverVendor
);

router.put("/update-valet-driver/:id/", AssignedDriverValet);
router.put("/remove-valet-driver/:id/", UnAssignedDriverValet);

router.put("/change-valet-driver-ride/:id/", AssignedDriverValetRide);


router.get("/start-valet-request/:id/", checkOrigin, StartValetRide);
router.get("/end-valet-request/:id/", checkOrigin, EndValetRide);

router.get("/start-valet-verify/:id/", checkOrigin, StartValetVerifyRide);
router.get("/end-valet-verify/:id/", checkOrigin, EndValetVerifyRide);

router.put("/update-valet-cost/:id/", valetUpdateDailyCost);

router.put("/update-valet-ride/:id/", UpdateUserValetRide);

router.put("/update-valet-ride-verify-OTP/:id/", UpdateUserValetRideVerifyOTP);

router.get("/update-valet-ride-key/:id/", UpdateUserValetRideKey);




router.post("/login-verify-otp/", checkOrigin, LoginAndVerifyOTP);

export default router;
