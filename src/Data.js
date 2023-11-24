const savedUserList = localStorage.getItem("userList");

if (!savedUserList) {
  const userList = [
    {
      name: "Vy Van Muoi",
      email: "muoigghh@mail.com",
      id: 1,
    },
    {
      name: "Pham Van Nam",
      email: "Nam@mail.com",
      id: 2,
    },
    {
      name: "Pham Cong Minh",
      email: "Minh@mail.com",
      id: 3,
    },
  ];
  localStorage.setItem("userList", JSON.stringify(userList));
} else {
  const parsedUserList = JSON.parse(savedUserList);
  console.log("Danh sách người dùng từ localStorage:", parsedUserList);
}
