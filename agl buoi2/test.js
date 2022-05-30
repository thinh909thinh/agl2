// const users = [
//     {
//         id: 1,
//         name: "Khan",
//     },
//     {
//         id: 2,
//         name: "Kiên Đàm",
//     },
//     {
//         id: 3,
//         name: "Ông Thọ",
//     },
// ];
// const comments = [
//     {
//         id: 1,
//         user_id: 2,
//         content: "Video hay qúa",
//     },
//     {
//         id: 2,
//         user_id: 1,
//         content: "Cảm ơn em nhé!",
//     },
// ];
// const getComments = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(comments);
//         }, 1000);
//     });
// };
// const getUserByIds = (userIds) => {
//     return new Promise((resolve,rejach) => {
//         setTimeout(() => {
//             const result = users.filter((user) => userIds.includes(user.id))
//             console.log(result);
//             resolve(result);
//         }, 1000);
//     });
// };
// getComments()
//     .then((comments) => {
//         const userIds = comments.map((comment) => comment.user_id);
//         return getUserByIds(userIds).then((users) => {
//             return {
//                 users,
//                 comments,
//             };
//         });
//     })
//     .then((data) => {
//         const ul = document.querySelector("ul");
//         let html = "";
//         data.comments.forEach((comment) => {
//             const user = data.users.find((user) => user.id === comment.user_id);
//             html += `<li>${user.name}: ${comment.content}</li>`;
//         });
//         ul.innerHTML = html;
//         document.body.appendChild(ul);
//     });
    ////////////////////////////////////////////
    var users = [
        { name: "trong quy", id: 1 },
        { name: "cong tinh", id: 2 },
        { name: "trong nhan", id: 3 },
      ];
      var comments = [
        { id: 1, user_Id: 1, comment: "how are you ?" },
        { id: 2, user_Id: 2, comment: "i am fine" },
      ];
      // việc 3 lấy giá trị của biến userIds bên dưới để nạp vào getUserByIds để lọc ra các user thỏa điều kiện
      function getUserByIds(userIds) {
        return new Promise(function (resolve) {
          var result = users.filter(function (user) {
            // lọc ra các user từ mảng User dựa theo điều kiện bên dưới và lưu vào biến result
            return userIds.includes(user.id); //điều kiện lọc id = userIds= true(lấy),id khác userIds = flase(loại)
          });
          setTimeout(function () {
            resolve(result);
          }, 1000);
        });
      }
      //
      // việc 1 tạo hạm để lấy user_ID  trong mảng comments[] để chọc lên mảng users[]
      function getComments() {
        return new Promise(function (resolve) {
          setTimeout(function () {
            resolve(comments);
          }, 1000);
        });
      }
      //
      //khối thực thi-gọi hàm chạy theo kịch bản: khôi code dưới này mang ý nghĩa gọi hàm đã tạo sẵn ở trên để thực thi các đầu việc ở trên theo thứ tự và trả về một giá trị tổng là data
      //tìm được data là đã hết ý chính của bài,còn phần sau in ra giao diện các giá trị đều được lấy ra từ data
      getComments()
        .then(function (comments) {
          var userIds = comments.map(function (comment) {
            return comment.user_Id;
          });
          // việc 2 Đã lấy được user_Id lưu vào biến userIds
          return getUserByIds(userIds).then(function (users) {
            //lưu ý  then(function (users) ở đây là của Promise getUserByIds(userIds)
            //khi một promise.then() return ra một promise con.thì .then()tiếp theo sẽ là .then()của promise con
            return {
              users: users,
              comment: comments,
            };
          });
          //việc 4 tổng hợp các user và comment của các user này lưu vào tham số data
        })
        .then(function (data) {
          console.log(data);
        });
      // hết khối thực thi