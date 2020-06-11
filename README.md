# Mục Tiêu

Xây dựng một project mini đơn giản để áp dụng những kiến thức về redux vào project Reactjs

- Tập trung nhiều vào REDUX với REDUX TOOLKIT
- Sử dụng toàn bộ là HOOKS
- Học sử dụng UI lib: REACTSTRAP
- Học cách sử dụng form: FORMIK
- Học Cách tổ chức API (optional)

# Project này build cái gì ?

`PHOTO APP`

- App đơn giản để quản lý hình ảnh yêu thích, được chọn từ https://picsum.photos/
- CRUD operators
- Gồm có 2 trang:
    - `Home`: listing + view + delete
    - `AddEdit`: dùng để tạo mới + sửa thông tin của một photo
- Mỗi photo gồm: `title` + `categoryID` + `imageUrl`
- các chức năng: 
    + render danh sách photo yêu thích
    + lọc photo theo category
    + thêm mới một photo
    + chỉnh sửa một photo
    + Remove một photo
    + persist dữ liệu khi reload browser (save ở localstorage)
    + Random photo ngẫu nhiên từ https://picsum.photos/ 
    + Hiển thị danh sách photo https://picsum.photos/ để lựa chọn

# học đc gì từ project này

- tổ chức folder, files trong thực tế
- sử đụng redux tốt hơn với redux toolkit
- biết cách tạo các custom field trong `Formik`
- thiết kế routing trong Reactjs App
- sử dụng một thư viện UI bên ngoài để làm UI