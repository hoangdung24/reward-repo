## Hiện tại em đã thiết kế lại page và hoàn thành một số yêu cầu của bài, em sẽ mô tả rõ hơn những gì em làm trong các REQUIREMENTS của bài test


- Tổng thể: Website phải responsive: 
   - Em dùng Bootrasp và css để có thể responsive cho web

- Navbar: Thanh navbar có chứa anchor để điều hướng tới các phần tương ứng trong trang. Khi điều hướng tới các phần trong trang yêu cầu scroll có hiệu ứng smooth
   - Em dùng dùng các thẻ <a> kết hợp với html{scroll-behavior: smooth} để tạo hi ứng scroll smooth.

- Thương hiệu liên kết: có thể dùng dumb data để triển khai
   - Về carousel, hiện tại em chưa code phần này nếu được em xin phép bổ sung sau.
- Tin tức: fetch dữ liệu từ trên server với api như sau https://member-intro.t-solution.vn/api/v2/pages/?type=blog.BlogDetailPage&fields=*&limit=3&is_on_homepage=true
   - Em dùng axios để gọi và lấy dữ liệu từ API sau đó render lên FE.

- Đăng ký quán: Xác thực dữ liệu ở những trường có dấu * Reset form sau khi thực hiện thành công Phần đính kèm không bắt buộc Thêm loading khi đang gửi dữ liệu lên server (Không bắt buộc) Chèn thông báo nếu gửi thành công hoặc thất bại.
    - Em dùng thư viện validator để có thể check email và sô điện thoại có hợp lệ không. Bên cạnh đó em còn có check các thông tin ở trường bắt buộc nhập         và hiện thị ra các thông báo cho khách hàng trong mỗi trường hợp.

- Footer: Phần đăng ký nhận thông tin phải xác thực là email trước khi gửi lên server.
    - Tương tự như trên em cũng dùng thư viện validator check email và xem trường này có trống không và thông báo đến khách hàng.
