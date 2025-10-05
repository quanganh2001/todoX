export const getAllTasks = (request, response) => {
  response.status(200).send('bạn có 20 việc cần làm');
};

export const createTask = (req, res) => {
  res.status(201).json({ message: 'Nhiệm vụ mới đã được thêm vào thành công.' });
};

export const updateTask = (req, res) => {
  res.status(200).json({ message: 'Nhiệm vụ đã được update thành công.' });
};

export const deleteTask = (req, res) => {
  res.status(200).json({ message: 'Nhiệm vụ đã được xóa thành công.' });
};
