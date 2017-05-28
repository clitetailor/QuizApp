import { QuizPackets } from '../../../both/collections/quizzes.collection';
import { QuizPacket } from '../../../both/models/quiz.model';

export function loadQuizzes(){
    if (QuizPackets.find().cursor.count()===0){
        const quizpackets: QuizPacket[]=
            [
                {
                    "Quizzes": [
                        {
                            "CauHoi":"The mechanism of a confirmed letter of credit works as follows:", 
                            "Answers": [
                                {
                                    "DapAn": "Buyer instructs issuing bank to issue a letter of credit in favor of the seller",
                                    "True": true,
                                    "SoNguoiChon": 20
                                },
                                {
                                    "DapAn": "Buyer instructs issuing bank to instruct an advising bank to pay under a letter of credit in favor of the seller",
                                    "True": false,
                                    "SoNguoiChon": 44
                                },
                                {
                                    "DapAn": "Buyer instructs issuing bank to instruct any third bank to under letter of credit in favor of the seller",
                                    "True": false,
                                    "SoNguoiChon": 34
                                }
                            ],
                            "SoNguoiTraLoi": 98
                        }, 
                        {
                            "CauHoi":"In CIF and CIP contracts, the exporter normally assigns the insurance agreement to……", 
                            "Answers": [
                                {
                                    "DapAn": "The buyer",
                                    "True": false,
                                    "SoNguoiChon": 20
                                },
                                {
                                    "DapAn": "The issuing bank",
                                    "True": true,
                                    "SoNguoiChon": 12
                                },
                                {
                                    "DapAn": "The carrier",
                                    "True": false,
                                    "SoNguoiChon": 20
                                }
                            ],
                            "SoNguoiTraLoi": 52
                        },
                        {
                            "CauHoi":"In CIF and CIP contracts, the exporter normally assigns the insurance agreement to……", 
                            "Answers": [
                                {
                                    "DapAn": "The buyer",
                                    "True": false,
                                    "SoNguoiChon": 22
                                },
                                {
                                    "DapAn": "The issuing bank",
                                    "True": true,
                                    "SoNguoiChon": 30
                                },
                                {
                                    "DapAn": "The carrier",
                                    "True": false,
                                    "SoNguoiChon": 0
                                }
                            ],
                            "SoNguoiTraLoi": 52
                        }
                    ],
                    "LinhVuc": "Tiếng Anh",
                    "ThoiGianTao": new Date(2015, 4, 15),
                    "ThoiGianTraLoi": 15,
                    "SoLuotView": 100,
                    "SoLuotVote": 50,
                    "TieuDe": "Kiểm tra tiếng Anh"
                },
                {
                    "Quizzes": [
                        {
                           "CauHoi":"Pháp dựa vào giai cấp nào để thống trị nhân dân ta?", 
                            "Answers": [
                                {
                                    "DapAn": "Nông dân",
                                    "True": false,
                                    "SoNguoiChon": 20
                                },
                                {
                                    "DapAn": "Công nhân",
                                    "True": false,
                                    "SoNguoiChon": 20
                                },
                                {
                                    "DapAn": "Địa chủ phong kiến",
                                    "True": true,
                                    "SoNguoiChon": 33
                                }
                            ],
                            "SoNguoiTraLoi": 73
                        }, 
                        {
                            "CauHoi":"Ở châu Á, Đảng Cộng sản nước nào ra đời sớm nhất?", 
                            "Answers": [
                                {
                                    "DapAn": "Indonesia",
                                    "True": true,
                                    "SoNguoiChon": 21
                                },
                                {
                                    "DapAn": "Trung Quốc",
                                    "True": false,
                                    "SoNguoiChon": 10
                                },
                                {
                                    "DapAn": "Việt Nam",
                                    "True": false,
                                    "SoNguoiChon": 29
                                }
                            ],
                            "SoNguoiTraLoi": 60
                        },
                        {
                            "CauHoi":"Lãnh tụ nào của Ấn Độ được nhân dân tôn sùng như một vị thánh", 
                            "Answers": [
                                {
                                    "DapAn": "Ti-lắc",
                                    "True": false,
                                    "SoNguoiChon": 13
                                },
                                {
                                    "DapAn": "Gan-di",
                                    "True": true,
                                    "SoNguoiChon": 22
                                },
                                {
                                    "DapAn": "A-so-ka",
                                    "True": false,
                                    "SoNguoiChon": 11
                                }
                            ],
                            "SoNguoiTraLoi": 46
                        }
                    ],
                    "LinhVuc": "Lịch Sử",
                    "ThoiGianTao": new Date(2016, 3, 15),
                    "ThoiGianTraLoi": 15,
                    "SoLuotView": 104,
                    "SoLuotVote": 43,
                    "TieuDe": "Lịch Sử Việt Nam"
                },
                {
                    "Quizzes": [
                        {
                            "CauHoi":"Giả sử một gen được cấu tạo từ 3 loại nuclêôtit: A, T, G thì trên mạch gốc của gen này có thể có tối đa bao nhiêu loại mã bộ ba?", 
                            "Answers": [
                                {
                                    "DapAn": "6 loại mã bộ ba.",
                                    "True": false,
                                    "SoNguoiChon": 20
                                },
                                {
                                    "DapAn": "9 loại mã bộ ba.",
                                    "True": false,
                                    "SoNguoiChon": 20
                                },
                                {
                                    "DapAn": "27 loại mã bộ ba.",
                                    "True": true,
                                    "SoNguoiChon": 20
                                }
                            ],
                            "SoNguoiTraLoi": 60
                        }, 
                        {
                            "CauHoi":"Trong 64 bộ ba mã di truyền, có 3 bộ ba không mã hoá cho axit amin nào. Các bộ ba đó là:", 
                            "Answers": [
                                {
                                    "DapAn": "UGU, UAA, UAG",
                                    "True": false,
                                    "SoNguoiChon": 10
                                },
                                {
                                    "DapAn": "UAG, UAA, UGA",
                                    "True": true,
                                    "SoNguoiChon": 20
                                },
                                {
                                    "DapAn": "UUG, UGA, UAG",
                                    "True": false,
                                    "SoNguoiChon": 20
                                }
                            ],
                            "SoNguoiTraLoi": 50
                        },
                        {
                            "CauHoi":"Trong quá trình nhân đôi ADN, vì sao trên mỗi chạc tái bản có một mạch được tổng hợp liên tục còn mạch kia được tổng hợp gián đoạn?", 
                            "Answers": [
                                {
                                    "DapAn": "Vì enzim ADN polimeraza chỉ tổng hợp mạch mới theo chiều 5’→3’.",
                                    "True": true,
                                    "SoNguoiChon": 20
                                },
                                {
                                    "DapAn": "Vì enzim ADN polimeraza chỉ tác dụng lên một mạch.",
                                    "True": false,
                                    "SoNguoiChon": 20
                                },
                                {
                                    "DapAn": "Vì enzim ADN polimeraza chỉ tác dụng lên mạch khuôn 5’→3’.",
                                    "True": false,
                                    "SoNguoiChon": 10
                                }
                            ],
                            "SoNguoiTraLoi":  50
                        }
                    ],
                    "LinhVuc": "Sinh Học",
                    "ThoiGianTao": new Date(2017, 3, 15),
                    "ThoiGianTraLoi": 15,
                    "SoLuotView": 60,
                    "SoLuotVote": 10,
                    "TieuDe": "Mã di truyền và quá trình nhân đôi ADN"
                },
                {
                    "Quizzes": [
                        {
                            "CauHoi":"Quá trình phiên mã ở vi khuẩn E.coli xảy ra trong", 
                            "Answers": [
                                {
                                    "DapAn": "tế bào chất.",
                                    "True": true,
                                    "SoNguoiChon": 20
                                },
                                {
                                    "DapAn": "ribôxôm.",
                                    "True": false,
                                    "SoNguoiChon": 20
                                },
                                {
                                    "DapAn": "ti thể.",
                                    "True": false,
                                    "SoNguoiChon": 5
                                }
                            ],
                            "SoNguoiTraLoi": 45
                        }, 
                        {
                            "CauHoi":"Trong quá trình dịch mã, mARN thường gắn với một nhóm ribôxôm gọi là poliribôxôm giúp", 
                            "Answers": [
                                {
                                    "DapAn": "điều hoà sự tổng hợp prôtêin.",
                                    "True": true,
                                    "SoNguoiChon": 12
                                },
                                {
                                    "DapAn": "tăng hiệu suất tổng hợp prôtêin.",
                                    "True": false,
                                    "SoNguoiChon": 28
                                },
                                {
                                    "DapAn": "tổng hợp các prôtêin cùng loại.",
                                    "True": false,
                                    "SoNguoiChon": 2
                                }
                            ],
                            "SoNguoiTraLoi": 42
                        },
                        {
                            "CauHoi":"Dịch mã thông tin di truyền trên bản mã sao thành trình tự axit amin trong chuỗi polipeptit là chức năng của", 
                            "Answers": [
                                {
                                    "DapAn": "rARN.",
                                    "True": false,
                                    "SoNguoiChon": 12
                                },
                                {
                                    "DapAn": "tARN.",
                                    "True": true,
                                    "SoNguoiChon": 20
                                },
                                {
                                    "DapAn": "mARN.",
                                    "True": false,
                                    "SoNguoiChon": 10
                                }
                            ],
                            "SoNguoiTraLoi" : 42
                        }
                    ],
                    "LinhVuc": "Sinh Học",
                    "ThoiGianTao": new Date(2015, 7, 19),
                    "ThoiGianTraLoi": 15,
                    "SoLuotView": 50,
                    "SoLuotVote": 24,
                    "TieuDe": "Phiên mã và dịch mã"
                }

                // {
                //     "GoiID": 5,
                //     "Quizzes": [
                //         {
                //             "CauHoiID": 1,
                //             "CauHoi":"Trong cơ chế điều hòa hoạt động của opêron Lac ở E.coli, khi môi trường không có lactôzơ thì prôtêin ức chế sẽ ức chế quá trình phiên mã bằng cách", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "liên kết vào vùng khởi động.",
                //                     "True": false,
                //                     "SoNguoiChon": 20
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "liên kết vào vùng mã hóa.",
                //                     "True": false,
                //                     "SoNguoiChon": 20
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "liên kết vào vùng vận hành.",
                //                     "True": true,
                //                     "SoNguoiChon": 20
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 60
                //         }, 
                //         {
                //             "CauHoiID": 2,
                //             "CauHoi":"Sản phẩm hình thành cuối cùng theo mô hình của opêron Lac ở E.coli là:", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "1 loại prôtêin tương ứng của 3 gen Z, Y, A hình thành 1 loại enzim phân hủy lactôzơ",
                //                     "True": false,
                //                     "SoNguoiChon": 20
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "3 loại prôtêin tương ứng của 3 gen Z, Y, A hình thành 3 loại enzim phân hủy lactôzơ",
                //                     "True": true,
                //                     "SoNguoiChon": 20
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "3 phân tử mARN tương ứng với 3 gen Z, Y, A",
                //                     "True": false,
                //                     "SoNguoiChon": 16
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 56
                //         },
                //         {
                //             "CauHoiID": 3,
                //             "CauHoi":"Hai nhà khoa học người Pháp đã phát hiện ra cơ chế điều hoà hoạt động gen ở:", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "vi khuẩn lactic.",
                //                     "True": false,
                //                     "SoNguoiChon": 10
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "vi khuẩn E. coli.",
                //                     "True": true,
                //                     "SoNguoiChon": 24
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "vi khuẩn Rhizobium.",
                //                     "True": false,
                //                     "SoNguoiChon": 22
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 56
                //         }
                //     ],
                //     "TacGia":"TacGia3",
                //     "LinhVuc": "Sinh Học",
                //     "ThoiGianTao": "1:50:44 23/08/2015",
                //     "ThoiGianTraLoi": 15,
                //     "SoLuotView": 60,
                //     "SoLuotVote": 29,
                //     "TieuDe": "Điều hòa hoạt động gen"
                // },
                // {
                //     "GoiID": 6,
                //     "Quizzes": [
                //         {
                //             "CauHoiID": 1,
                //             "CauHoi":"Văn học trung đại Việt Nam được viết bằng loại văn tự nào?", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "Chữ Hán và chữ Quốc ngữ.	",
                //                     "True": false,
                //                     "SoNguoiChon": 20
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "Chữ Hán và chữ Nôm.",
                //                     "True": true,
                //                     "SoNguoiChon": 10
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "Chữ Hán",
                //                     "True": false,
                //                     "SoNguoiChon": 20
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 50
                //         }, 
                //         {
                //             "CauHoiID": 2,
                //             "CauHoi":"Nhận định nào sau đây nhận xét đúng về xuất xứ chữ Nôm?", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "Chữ Nôm là loại chữ cổ của người Việt, dựa vào chữ Hán để ghi âm tiếng Việt.",
                //                     "True": false,
                //                     "SoNguoiChon": 13
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "Chữ Nôm là loại chữ do người Việt cổ tự sáng tạo ra để ghi âm tiếng Việt.	",
                //                     "True": false,
                //                     "SoNguoiChon": 20
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "Chữ Nôm là loại chữ cổ của người Việt, dùng chữ Hán để ghi các văn bản viết.	",
                //                     "True": true,
                //                     "SoNguoiChon": 4
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 37
                //         },
                //         {
                //             "CauHoiID": 3,
                //             "CauHoi":"Văn học Việt Nam giai đoạn đầu từ thế kỉ XX đến 1945 thể hiện rõ nhất phương diện nào sau đây của con người?", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "Con người vũ trụ",
                //                     "True": false,
                //                     "SoNguoiChon": 20
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "Con người lí tưởng hóa",
                //                     "True": false,
                //                     "SoNguoiChon": 12
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "Con người cá nhân.",
                //                     "True": true,
                //                     "SoNguoiChon": 5
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 37
                //         }
                //     ],
                //     "TacGia":"TacGia4",
                //     "LinhVuc": "Văn Học",
                //     "ThoiGianTao": "0:20:44 15/09/2016",
                //     "ThoiGianTraLoi": 15,
                //     "SoLuotView": 50,
                //     "SoLuotVote": 24,
                //     "TieuDe": "Văn học dân gian Việt Nam"
                // },
                // {
                //     "GoiID": 7,
                //     "Quizzes": [
                //         {
                //             "CauHoiID": 1,
                //             "CauHoi":"Tầm vóc sử thi của đoạn trích Chiến thắng Mtao Mxây thể hiện rõ nhất trong", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": " mối quan hệ giữa hình tượng người anh hùng và khung cảnh thiên nhiên hùng vĩ",
                //                     "True": true,
                //                     "SoNguoiChon": 10
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "mối quan hệ giữa hình tượng người anh hùng và hình tượng của kẻ thù.	",
                //                     "True": false,
                //                     "SoNguoiChon": 14
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "mối quan hệ giữa hình tượng người anh hùng và các lực lượng siêu nhiên.	",
                //                     "True": false,
                //                     "SoNguoiChon": 11
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 35
                //         }, 
                //         {
                //             "CauHoiID": 2,
                //             "CauHoi":"Khung cảnh ăn mừng chiến thắng ở cuối đoạn trích Chiến thắng Mtao Mxây chủ yếu thể hiện ý nghĩa gì?", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "Tính dân tộc",
                //                     "True": false,
                //                     "SoNguoiChon": 10
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "Tính cộng đồng",
                //                     "True": true,
                //                     "SoNguoiChon": 11
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "Tính thực tiễn",
                //                     "True": false,
                //                     "SoNguoiChon": 7
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 28
                //         },
                //         {
                //             "CauHoiID": 3,
                //             "CauHoi":"Hình ảnh 'ngọc trai - giếng nước' trong Truyện An Dương Vương và Mị Châu - Trọng Thuỷ nói lên ý nghĩa gì?", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "Biểu trưng cho sự hoá giải của một mối oan tình.	",
                //                     "True": false,
                //                     "SoNguoiChon": 12
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "Ngợi ca một tình yêu thuỷ chung, son sắt.	",
                //                     "True": false,
                //                     "SoNguoiChon": 12
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "Ngợi ca sự trong sạch của Mị Châu.	",
                //                     "True": true,
                //                     "SoNguoiChon": 4
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 28
                //         }
                //     ],
                //     "TacGia":"TacGia4",
                //     "LinhVuc": "Văn Học",
                //     "ThoiGianTao": "12:20:44 15/09/2015",
                //     "ThoiGianTraLoi": 15,
                //     "SoLuotView": 60,
                //     "SoLuotVote": 28,
                //     "TieuDe": "Văn học dân gian Việt Nam"
                // },
                // {
                //     "GoiID": 8,
                //     "Quizzes": [
                //         {
                //             "CauHoiID": 1,
                //             "CauHoi":"Trong văn bản “Con rồng cháu tiên” , người con trưởng theo Âu Cơ lên rừng được tôn lên làm gì?", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "Thủ lĩnh",
                //                     "True": false,
                //                     "SoNguoiChon": 30
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "Tộc trưởng",
                //                     "True": false,
                //                     "SoNguoiChon": 20
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "Vua",
                //                     "True": true,
                //                     "SoNguoiChon": 40
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 90
                //         }, 
                //         {
                //             "CauHoiID": 2,
                //             "CauHoi":"Văn bản “Con rồng cháu tiên” có sự kết hợp của những phương thức biểu đạt nào ?", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "Biêủ cảm và miêu tả",
                //                     "True": false,
                //                     "SoNguoiChon": 30
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "Tự sự và miêu tả",
                //                     "True": true,
                //                     "SoNguoiChon": 27
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "Miêu tả v à nghị luận",
                //                     "True": false,
                //                     "SoNguoiChon": 25
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 82
                //         },
                //         {
                //             "CauHoiID": 3,
                //             "CauHoi":"Văn bản “Con rồng cháu tiên” được kể nhằm mục đích gì ?", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": " Để làm cho cuộc sống lao động của người dân ý vị hơn",
                //                     "True": false,
                //                     "SoNguoiChon": 30
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": " Để người đời sau thấy được trí tưởng tượng phong phú kì diệu của người xưa",
                //                     "True": false,
                //                     "SoNguoiChon": 10
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": " Để giải thích suy tôn nguồn gốc giống nòi ; thể hiện ý nguyện đoàn kết của người x ưa",
                //                     "True": true,
                //                     "SoNguoiChon": 39
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 79
                //         }
                //     ],
                //     "TacGia":"TacGia4",
                //     "LinhVuc": "Văn Học",
                //     "ThoiGianTao": "12:20:44 15/09/2015",
                //     "ThoiGianTraLoi": 15,
                //     "SoLuotView": 100,
                //     "SoLuotVote": 33,
                //     "TieuDe": "Con rồng cháu tiên"
                // },
                // {
                //     "GoiID": 9,
                //     "Quizzes": [
                //         {
                //             "CauHoiID": 1,
                //             "CauHoi":"Chi tiết bà con làng xóm vui mừng góp gạo nuôi  Gióng trong văn bản 'Thánh Gióng' có ý nghĩa gì?", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "Thể hiện sự thương cảm với gia đình Thánh Gióng",
                //                     "True": false,
                //                     "SoNguoiChon": 5
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "Thể hiện lòng yêu nước nồng nàn  và tinh thần đoàn kết của nhân dân ta",
                //                     "True": true,
                //                     "SoNguoiChon": 55
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "Thể hiện sự quan niệm “ hàng xóm láng giềng tối lửa tắt đèn có nhau”",
                //                     "True": false,
                //                     "SoNguoiChon": 18
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 78
                //         }, 
                //         {
                //             "CauHoiID": 2,
                //             "CauHoi":"Văn bản “Thánh Gióng” liên quan đến hội thi nào ?", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "Hội thi học sinh thanh lịch",
                //                     "True": false,
                //                     "SoNguoiChon": 20
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "Hội khoẻ Phù Đổng",
                //                     "True": true,
                //                     "SoNguoiChon": 30
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "Hội thi sáng tác văn học trẻ",
                //                     "True": false,
                //                     "SoNguoiChon": 20
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 70
                //         },
                //         {
                //             "CauHoiID": 3,
                //             "CauHoi":"Phương thức biểu đạt chính của văn bản “Thánh Gióng” là gì ?", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "Nghị luận",
                //                     "True": false,
                //                     "SoNguoiChon": 10
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "Biểu cảm",
                //                     "True": false,
                //                     "SoNguoiChon": 25
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "Tự sự",
                //                     "True": true,
                //                     "SoNguoiChon": 30
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 65
                //         }
                //     ],
                //     "TacGia":"TacGia4",
                //     "LinhVuc": "Văn Học",
                //     "ThoiGianTao": "13:10:44 15/10/2015",
                //     "ThoiGianTraLoi": 15,
                //     "SoLuotView": 80,
                //     "SoLuotVote": 28,
                //     "TieuDe": "Thánh Gióng"
                // },
                // {
                //     "GoiID": 10,
                //     "Quizzes": [
                //         {
                //             "CauHoiID": 1,
                //             "CauHoi":"Một tế bào sinh dưỡng của một loài có bộ nhiễm sắc thể kí hiệu: AaBbDdEe bị rối loạn phân li 1 cặp nhiễm sắc thể Dd trong phân bào sẽ tạo ra 2 tế bào con có kí hiệu nhiễm sắc thể là:", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "AaBbDDddEe và AaBbEe.",
                //                     "True": true,
                //                     "SoNguoiChon": 30
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "AaBbDDdEe và AaBbdEe.",
                //                     "True": false,
                //                     "SoNguoiChon": 21
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "AaBbDddEe và AaBbdEe.",
                //                     "True": false,
                //                     "SoNguoiChon": 10
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 61
                //         }, 
                //         {
                //             "CauHoiID": 2,
                //             "CauHoi":"Ở một loài thực vật, gen A qui định tính trạng hạt đỏ trội hoàn toàn so với gen a qui định tính trạng lặn hạt màu trắng. Trong một phép lai, nếu ở thế hệ F 1 có tỉ lệ 35 cây hạt đỏ: 1 cây hạt trắng thì kiểu gen của các cây bố mẹ là:", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "AAa x AAa.",
                //                     "True": false,
                //                     "SoNguoiChon": 10
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "AAa x AAaa, AAaa x AAaa.",
                //                     "True": false,
                //                     "SoNguoiChon": 20
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "Cả A, B đúng",
                //                     "True": true,
                //                     "SoNguoiChon": 28
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 58
                //         },
                //         {
                //             "CauHoiID": 3,
                //             "CauHoi":"Cơ thể mà tế bào sinh dưỡng đều thừa 2 nhiễm sắc thể trên 2 cặp tương đồng được gọi là", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "thể tứ bội",
                //                     "True": false,
                //                     "SoNguoiChon": 30
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "thể bốn.",
                //                     "True": false,
                //                     "SoNguoiChon": 0
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "thể ba kép.",
                //                     "True": true,
                //                     "SoNguoiChon": 28
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 58
                //         }
                //     ],
                //     "TacGia":"TacGia3",
                //     "LinhVuc": "Sinh Học",
                //     "ThoiGianTao": "12:20:44 15/09/2016",
                //     "ThoiGianTraLoi": 15,
                //     "SoLuotView": 65,
                //     "SoLuotVote": 28,
                //     "TieuDe": "Đột biến số lượng nhiễm sắc thể"
                // },
                // {
                //     "GoiID": 11,
                //     "Quizzes": [
                //         {
                //             "CauHoiID": 1,
                //             "CauHoi":"Employers often require that candidates have not only a degree .............", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "but two years experience ",
                //                     "True": false,
                //                     "SoNguoiChon": 3
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "also two years experience",
                //                     "True": false,
                //                     "SoNguoiChon": 18
                                                        
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "but also two-year experience ",
                //                     "True": true,
                //                     "SoNguoiChon": 20
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 41
                //         }, 
                //         {
                //             "CauHoiID": 2,
                //             "CauHoi":"Sedimentary rocks are formed below the surface of the earth ............... very high temperatures and pressures.", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "where there are",
                //                     "True": true,
                //                     "SoNguoiChon": 20
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "where are there",
                //                     "True": false,
                //                     "SoNguoiChon": 20
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "there are where",
                //                     "True": false,
                //                     "SoNguoiChon": 1
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 41
                //         },
                //         {
                //             "CauHoiID": 3,
                //             "CauHoi":"Clipper ships were the swiftest sailing ships that ...................... to sea and the most beautiful.", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "ever were put ",
                //                     "True": false,
                //                     "SoNguoiChon": 0
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "ever were putted",
                //                     "True": false,
                //                     "SoNguoiChon": 10
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "were ever putted",
                //                     "True": true,
                //                     "SoNguoiChon": 20
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 30
                //         }
                //     ],
                //     "TacGia":"TacGia2",
                //     "LinhVuc": "Tiếng Anh",
                //     "ThoiGianTao": "12:60:44 25/09/2015",
                //     "ThoiGianTraLoi": 15,
                //     "SoLuotView": 50,
                //     "SoLuotVote": 28,
                //     "TieuDe": "Điền từ vào chỗ trống"
                // },
                // {
                //     "GoiID": 12,
                //     "Quizzes": [
                //         {
                //             "CauHoiID": 1,
                //             "CauHoi":"Experiments in the sonic imaging of moving objects ............... in both the United States and Europe well before the Second World War", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "were conducting ",
                //                     "True": false,
                //                     "SoNguoiChon": 10
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "had been conducted",
                //                     "True": false,
                //                     "SoNguoiChon": 21
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "have been conducted",
                //                     "True": true,
                //                     "SoNguoiChon": 25
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 56
                //         }, 
                //         {
                //             "CauHoiID": 2,
                //             "CauHoi":"............... photosynthesis were to stop, life would disappear from the planet Earth relatively quickly.", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "For",
                //                     "True": false,
                //                     "SoNguoiChon": 11
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "If  ",
                //                     "True": true,
                //                     "SoNguoiChon": 34
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "Although",
                //                     "True": false,
                //                     "SoNguoiChon": 5
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 51
                //         },
                //         {
                //             "CauHoiID": 3,
                //             "CauHoi":"America's first globe maker was James Wilson, who ................... and blacksmith in his earlier life.", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "a farmer had been",
                //                     "True": false,
                //                     "SoNguoiChon": 20
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "being a farmer",
                //                     "True": false,
                //                     "SoNguoiChon": 20
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "had been a farmer",
                //                     "True": true,
                //                     "SoNguoiChon": 11
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 51
                //         }
                //     ],
                //     "TacGia":"TacGia2",
                //     "LinhVuc": "Tiếng Anh",
                //     "ThoiGianTao": "23:20:44 25/10/2015",
                //     "ThoiGianTraLoi": 15,
                //     "SoLuotView": 60,
                //     "SoLuotVote": 58,
                //     "TieuDe": "Tiếng Anh trắc nghiệm lớp 11"
                // },
                // {
                //     "GoiID": 13,
                //     "Quizzes": [
                //         {
                //             "CauHoiID": 1,
                //             "CauHoi":"Trong văn bản “Sơn Tinh,Thuỷ Tinh”, vua Hùng đã không làm gì khi Sơn Tinh và Thuỷ Tinh đến cầu hôn Mị Nương ?", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "Vua Hùng băn khoăn không biết nhận lời ai và  từ chối ai",
                //                     "True": false,
                //                     "SoNguoiChon": 20
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": " Vua hẹn ngày hôm sau , ai mang lễ vật đến trước sẽ được lấy Mị Nương",
                //                     "True": false,
                //                     "SoNguoiChon": 20
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": " Vua hỏi ý kiến công chúa Mị Nương xem nàng muốn lấy ai",
                //                     "True": true,
                //                     "SoNguoiChon": 20
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 60
                //         }, 
                //         {
                //             "CauHoiID": 2,
                //             "CauHoi":"Trong văn bản “Sơn Tinh , Thuỷ Tinh”, chi tiết nào dưới đây mang dấu ấn lịch sử ?", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "Thần núi Sơn Tinh và thần biển Thuỷ Tinh cùng đến cầu hôn Mị Nương",
                //                     "True": false,
                //                     "SoNguoiChon": 20
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "Hiện tượng  lũ lụt vẫn  xảy ra vào tháng bảy , tháng tám ( âm lịch ) hàng năm ở  Bắc Bộ",
                //                     "True": true,
                //                     "SoNguoiChon": 10
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "Thần Thuỷ Tinh đã dùng phép lạ của mình để hô mưa gọi gió làm thành giông bão",
                //                     "True": false,
                //                     "SoNguoiChon": 20
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 50
                //         },
                //         {
                //             "CauHoiID": 3,
                //             "CauHoi":"Nguyên nhân chính  dẫn tới cuộc giao tranh giữa Thuỷ Tinh và Sơn Tinh là :", 
                //             "Answers": [
                //                 {
                //                     "DapAnID":1,
                //                     "DapAn": "Thuỷ Tinh mang lễ vật đến sau  không lấy được Mị Nương",
                //                     "True": true,
                //                     "SoNguoiChon": 30
                //                 },
                //                 {
                //                     "DapAnID":2,
                //                     "DapAn": "Vua Hùng làm lễ kén rể cho con gái Mị Nương",
                //                     "True": false,
                //                     "SoNguoiChon": 5
                //                 },
                //                 {
                //                     "DapAnID":3,
                //                     "DapAn": "Mị Nương đem lòng yêu Sơn Tinh và căm ghét Thuỷ Tinh",
                //                     "True": false,
                //                     "SoNguoiChon": 15
                //                 }
                //             ],
                //             "SoNguoiTraLoi": 50
                //         }
                //     ],
                //     "TacGia":"TacGia4",
                //     "LinhVuc": "Văn Học",
                //     "ThoiGianTao": "22:20:44 15/09/2016",
                //     "ThoiGianTraLoi": 15,
                //     "SoLuotView": 56,
                //     "SoLuotVote": 28,
                //     "TieuDe": "Sơn Tinh - Thủy Tinh"
                // }
                
            ];
            quizpackets.forEach((quizpacket: QuizPacket)=> QuizPackets.insert(quizpacket))
                        
    }
}
        