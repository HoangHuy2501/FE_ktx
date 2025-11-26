

const ApiRoutes = {
  //auth
  Login:'login',
  register:'register',
  // suites and room
  ListSuites:'listSuites',
  ListRoomBySuites:'listRoom',
  CountRoomBySuites:"countRoom",
  //booking
  Booking:"bookRoom", //thêm query params userid, roomid
  HistoryByUserID:"historyBookingByRoom", 
  ReturnRoom:"returnRoom", // kèm id booking nào để hủy
  //user
  InforUser:"getAllUser", //thêm id user
  UpdateUser:"updateUser", // thêm id user
  //contact
  ListTopic: "getAllTopic",
  SendContact: "sendContact" // thêm query userid
}
export default ApiRoutes;