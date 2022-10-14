// Get User Detail
exports.getUserDetails = async (req, res, next) => {
  const user = [
    {
      name: 'Mahedi Hasan',
      email: 'mahedihasan@gmail.com',
      role: 'admin',
    },
    {
      name: 'Anwar Hossain',
      email: 'anwar@gmail.com',
      role: 'user',
    },
  ];

  res.status(200).json({
    success: true,
    user,
  });
};
