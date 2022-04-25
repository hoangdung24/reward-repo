## **MATERIAL**

> API_KEY = Api-Key ubc9FYnH.brSNHwzFxNIZgehgQosDArgFe70dfigA
---
## **ENDPOINT**

- Bài viết: https://member-intro.t-solution.vn/api/v2/pages/?type=blog.BlogDetailPage&fields=*&limit=3&is_on_homepage=true
- Đăng ký quán: https://member-intro.t-solution.vn/api/v2/submissions/ 
- Đăng ký nhận thông tin: https://member-intro.t-solution.vn/api/v2/subscribers/

***Lưu ý: Luôn gửi API KEY khi thực hiện lệnh POST***

> VD: { Authorization: "Api-Key ubc9FYnH.brSNHwzFxNIZgehgQosDArgFe70dfigA" }
---
## **REQUIREMENTS**

- Sử dụng ReactJS để tạo ra trang landing page như trong liên kết bên dưới. Liên kết: https://reward-landing-page.vercel.app/

- Clone dự án từ trên git về. Sau khi thực hiện xong tạo một nhánh khác với cấu trúc dev-<tên người thực hiện> rồi push ngược lại lên git.

- Tổng thể: Website phải responsive

- Navbar: Thanh navbar có chứa anchor để điều hướng tới các phần tương ứng trong trang. Khi điều hướng tới các phần trong trang yêu cầu scroll có hiệu ứng smooth.

- Thương hiệu liên kết: có thể dùng dumb data để triển khai.

- Tin tức: fetch dữ liệu từ trên server với api như sau https://member-intro.t-solution.vn/api/v2/pages/?type=blog.BlogDetailPage&fields=*&limit=3&is_on_homepage=true

- Đăng ký quán: Xác thực dữ liệu ở những trường có dấu * Reset form sau khi thực hiện thành công Phần đính kèm không bắt buộc Thêm loading khi đang gửi dữ liệu lên server (Không bắt buộc) Chèn thông báo nếu gửi thành công hoặc thất bại.

- Footer: Phần đăng ký nhận thông tin phải xác thực là email trước khi gửi lên server.
---
## **HINT**

- Có thể dùng bất kỳ thư viện UI nào để có thể hoàn thành giao diện. 
- Có thể search google để trợ giúp trong quá trình thực hiện. 
- Slider có thể tham khảo react-slick. 
- Xử lý form có thể tham khảo react-form-hook. 
- Fetch data có thể tham khảo axios.