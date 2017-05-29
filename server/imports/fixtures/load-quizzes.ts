import { QuizPackets } from '../../../both/collections/quizzes.collection';
import { QuizPacket } from '../../../both/models/quiz.model';

function countQuizzes() {
	return QuizPackets.find().cursor.count();
}

export default function loadQuizzes() {
	if (countQuizzes() === 0) {
		const quizPackets: QuizPacket[] =
			[
				{
					"questions": [
						{
							"content": "The mechanism of a confirmed letter of credit works as follows:",
							"answers": [
								{
									"content": "Buyer instructs issuing bank to issue a letter of credit in favor of the seller",
									"correct": true,
									"numberOfClicks": 20
								},
								{
									"content": "Buyer instructs issuing bank to instruct an advising bank to pay under a letter of credit in favor of the seller",
									"correct": false,
									"numberOfClicks": 44
								},
								{
									"content": "Buyer instructs issuing bank to instruct any third bank to under letter of credit in favor of the seller",
									"correct": false,
									"numberOfClicks": 34
								}
							],
							"numberOfRespondents": 98
						},
						{
							"content": "In CIF and CIP contracts, the exporter normally assigns the insurance agreement to……",
							"answers": [
								{
									"content": "The buyer",
									"correct": false,
									"numberOfClicks": 20
								},
								{
									"content": "The issuing bank",
									"correct": true,
									"numberOfClicks": 12
								},
								{
									"content": "The carrier",
									"correct": false,
									"numberOfClicks": 20
								}
							],
							"numberOfRespondents": 52
						},
						{
							"content": "In CIF and CIP contracts, the exporter normally assigns the insurance agreement to……",
							"answers": [
								{
									"content": "The buyer",
									"correct": false,
									"numberOfClicks": 22
								},
								{
									"content": "The issuing bank",
									"correct": true,
									"numberOfClicks": 30
								},
								{
									"content": "The carrier",
									"correct": false,
									"numberOfClicks": 0
								}
							],
							"numberOfRespondents": 52
						}
					],
					"topic": "Tiếng Anh",
					"time": new Date(2015, 4, 15),
					"duration": 15,
					"numberOfViews": 100,
					"numberOfVotes": 50,
					"title": "Kiểm tra tiếng Anh"
				},
				{
					"questions": [
						{
							"content": "Pháp dựa vào giai cấp nào để thống trị nhân dân ta?",
							"answers": [
								{
									"content": "Nông dân",
									"correct": false,
									"numberOfClicks": 20
								},
								{
									"content": "Công nhân",
									"correct": false,
									"numberOfClicks": 20
								},
								{
									"content": "Địa chủ phong kiến",
									"correct": true,
									"numberOfClicks": 33
								}
							],
							"numberOfRespondents": 73
						},
						{
							"content": "Ở châu Á, Đảng Cộng sản nước nào ra đời sớm nhất?",
							"answers": [
								{
									"content": "Indonesia",
									"correct": true,
									"numberOfClicks": 21
								},
								{
									"content": "Trung Quốc",
									"correct": false,
									"numberOfClicks": 10
								},
								{
									"content": "Việt Nam",
									"correct": false,
									"numberOfClicks": 29
								}
							],
							"numberOfRespondents": 60
						},
						{
							"content": "Lãnh tụ nào của Ấn Độ được nhân dân tôn sùng như một vị thánh",
							"answers": [
								{
									"content": "Ti-lắc",
									"correct": false,
									"numberOfClicks": 13
								},
								{
									"content": "Gan-di",
									"correct": true,
									"numberOfClicks": 22
								},
								{
									"content": "A-so-ka",
									"correct": false,
									"numberOfClicks": 11
								}
							],
							"numberOfRespondents": 46
						}
					],
					"topic": "Lịch Sử",
					"time": new Date(2016, 3, 15),
					"duration": 15,
					"numberOfViews": 104,
					"numberOfVotes": 43,
					"title": "Lịch Sử Việt Nam"
				},
				{
					"questions": [
						{
							"content": "Giả sử một gen được cấu tạo từ 3 loại nuclêôtit: A, T, G thì trên mạch gốc của gen này có thể có tối đa bao nhiêu loại mã bộ ba?",
							"answers": [
								{
									"content": "6 loại mã bộ ba.",
									"correct": false,
									"numberOfClicks": 20
								},
								{
									"content": "9 loại mã bộ ba.",
									"correct": false,
									"numberOfClicks": 20
								},
								{
									"content": "27 loại mã bộ ba.",
									"correct": true,
									"numberOfClicks": 20
								}
							],
							"numberOfRespondents": 60
						},
						{
							"content": "Trong 64 bộ ba mã di truyền, có 3 bộ ba không mã hoá cho axit amin nào. Các bộ ba đó là:",
							"answers": [
								{
									"content": "UGU, UAA, UAG",
									"correct": false,
									"numberOfClicks": 10
								},
								{
									"content": "UAG, UAA, UGA",
									"correct": true,
									"numberOfClicks": 20
								},
								{
									"content": "UUG, UGA, UAG",
									"correct": false,
									"numberOfClicks": 20
								}
							],
							"numberOfRespondents": 50
						},
						{
							"content": "Trong quá trình nhân đôi ADN, vì sao trên mỗi chạc tái bản có một mạch được tổng hợp liên tục còn mạch kia được tổng hợp gián đoạn?",
							"answers": [
								{
									"content": "Vì enzim ADN polimeraza chỉ tổng hợp mạch mới theo chiều 5’→3’.",
									"correct": true,
									"numberOfClicks": 20
								},
								{
									"content": "Vì enzim ADN polimeraza chỉ tác dụng lên một mạch.",
									"correct": false,
									"numberOfClicks": 20
								},
								{
									"content": "Vì enzim ADN polimeraza chỉ tác dụng lên mạch khuôn 5’→3’.",
									"correct": false,
									"numberOfClicks": 10
								}
							],
							"numberOfRespondents": 50
						}
					],
					"topic": "Sinh Học",
					"time": new Date(2017, 3, 15),
					"duration": 15,
					"numberOfViews": 60,
					"numberOfVotes": 10,
					"title": "Mã di truyền và quá trình nhân đôi ADN"
				},
				{
					"questions": [
						{
							"content": "Quá trình phiên mã ở vi khuẩn E.coli xảy ra trong",
							"answers": [
								{
									"content": "tế bào chất.",
									"correct": true,
									"numberOfClicks": 20
								},
								{
									"content": "ribôxôm.",
									"correct": false,
									"numberOfClicks": 20
								},
								{
									"content": "ti thể.",
									"correct": false,
									"numberOfClicks": 5
								}
							],
							"numberOfRespondents": 45
						},
						{
							"content": "Trong quá trình dịch mã, mARN thường gắn với một nhóm ribôxôm gọi là poliribôxôm giúp",
							"answers": [
								{
									"content": "điều hoà sự tổng hợp prôtêin.",
									"correct": true,
									"numberOfClicks": 12
								},
								{
									"content": "tăng hiệu suất tổng hợp prôtêin.",
									"correct": false,
									"numberOfClicks": 28
								},
								{
									"content": "tổng hợp các prôtêin cùng loại.",
									"correct": false,
									"numberOfClicks": 2
								}
							],
							"numberOfRespondents": 42
						},
						{
							"content": "Dịch mã thông tin di truyền trên bản mã sao thành trình tự axit amin trong chuỗi polipeptit là chức năng của",
							"answers": [
								{
									"content": "rARN.",
									"correct": false,
									"numberOfClicks": 12
								},
								{
									"content": "tARN.",
									"correct": true,
									"numberOfClicks": 20
								},
								{
									"content": "mARN.",
									"correct": false,
									"numberOfClicks": 10
								}
							],
							"numberOfRespondents": 42
						}
					],
					"topic": "Sinh Học",
					"time": new Date(2015, 7, 19),
					"duration": 15,
					"numberOfViews": 50,
					"numberOfVotes": 24,
					"title": "Phiên mã và dịch mã"
				}

				// {
				//     "GoiID": 5,
				//     "questions": [
				//         {
				//             "contentID": 1,
				//             "content":"Trong cơ chế điều hòa hoạt động của opêron Lac ở E.coli, khi môi trường không có lactôzơ thì prôtêin ức chế sẽ ức chế quá trình phiên mã bằng cách", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "liên kết vào vùng khởi động.",
				//                     "correct": false,
				//                     "numberOfClicks": 20
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "liên kết vào vùng mã hóa.",
				//                     "correct": false,
				//                     "numberOfClicks": 20
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "liên kết vào vùng vận hành.",
				//                     "correct": true,
				//                     "numberOfClicks": 20
				//                 }
				//             ],
				//             "numberOfRespondents": 60
				//         }, 
				//         {
				//             "contentID": 2,
				//             "content":"Sản phẩm hình thành cuối cùng theo mô hình của opêron Lac ở E.coli là:", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "1 loại prôtêin tương ứng của 3 gen Z, Y, A hình thành 1 loại enzim phân hủy lactôzơ",
				//                     "correct": false,
				//                     "numberOfClicks": 20
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "3 loại prôtêin tương ứng của 3 gen Z, Y, A hình thành 3 loại enzim phân hủy lactôzơ",
				//                     "correct": true,
				//                     "numberOfClicks": 20
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "3 phân tử mARN tương ứng với 3 gen Z, Y, A",
				//                     "correct": false,
				//                     "numberOfClicks": 16
				//                 }
				//             ],
				//             "numberOfRespondents": 56
				//         },
				//         {
				//             "contentID": 3,
				//             "content":"Hai nhà khoa học người Pháp đã phát hiện ra cơ chế điều hoà hoạt động gen ở:", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "vi khuẩn lactic.",
				//                     "correct": false,
				//                     "numberOfRespondents": 10
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "vi khuẩn E. coli.",
				//                     "correct": true,
				//                     "numberOfRespondents": 24
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "vi khuẩn Rhizobium.",
				//                     "correct": false,
				//                     "numberOfRespondents": 22
				//                 }
				//             ],
				//             "numberOfRespondents": 56
				//         }
				//     ],
				//     "TacGia":"TacGia3",
				//     "topic": "Sinh Học",
				//     "time": "1:50:44 23/08/2015",
				//     "duration": 15,
				//     "numberOfViews": 60,
				//     "numberOfVotes": 29,
				//     "title": "Điều hòa hoạt động gen"
				// },
				// {
				//     "GoiID": 6,
				//     "questions": [
				//         {
				//             "contentID": 1,
				//             "content":"Văn học trung đại Việt Nam được viết bằng loại văn tự nào?", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "Chữ Hán và chữ Quốc ngữ.	",
				//                     "correct": false,
				//                     "numberOfRespondents": 20
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "Chữ Hán và chữ Nôm.",
				//                     "correct": true,
				//                     "numberOfRespondents": 10
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "Chữ Hán",
				//                     "correct": false,
				//                     "numberOfRespondents": 20
				//                 }
				//             ],
				//             "numberOfRespondents": 50
				//         }, 
				//         {
				//             "contentID": 2,
				//             "content":"Nhận định nào sau đây nhận xét đúng về xuất xứ chữ Nôm?", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "Chữ Nôm là loại chữ cổ của người Việt, dựa vào chữ Hán để ghi âm tiếng Việt.",
				//                     "correct": false,
				//                     "numberOfRespondents": 13
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "Chữ Nôm là loại chữ do người Việt cổ tự sáng tạo ra để ghi âm tiếng Việt.	",
				//                     "correct": false,
				//                     "numberOfRespondents": 20
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "Chữ Nôm là loại chữ cổ của người Việt, dùng chữ Hán để ghi các văn bản viết.	",
				//                     "correct": true,
				//                     "numberOfRespondents": 4
				//                 }
				//             ],
				//             "numberOfRespondents": 37
				//         },
				//         {
				//             "contentID": 3,
				//             "content":"Văn học Việt Nam giai đoạn đầu từ thế kỉ XX đến 1945 thể hiện rõ nhất phương diện nào sau đây của con người?", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "Con người vũ trụ",
				//                     "correct": false,
				//                     "numberOfRespondents": 20
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "Con người lí tưởng hóa",
				//                     "correct": false,
				//                     "numberOfRespondents": 12
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "Con người cá nhân.",
				//                     "correct": true,
				//                     "numberOfRespondents": 5
				//                 }
				//             ],
				//             "numberOfRespondents": 37
				//         }
				//     ],
				//     "TacGia":"TacGia4",
				//     "topic": "Văn Học",
				//     "time": "0:20:44 15/09/2016",
				//     "duration": 15,
				//     "numberOfViews": 50,
				//     "numberOfVotes": 24,
				//     "title": "Văn học dân gian Việt Nam"
				// },
				// {
				//     "GoiID": 7,
				//     "questions": [
				//         {
				//             "contentID": 1,
				//             "content":"Tầm vóc sử thi của đoạn trích Chiến thắng Mtao Mxây thể hiện rõ nhất trong", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": " mối quan hệ giữa hình tượng người anh hùng và khung cảnh thiên nhiên hùng vĩ",
				//                     "correct": true,
				//                     "numberOfRespondents": 10
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "mối quan hệ giữa hình tượng người anh hùng và hình tượng của kẻ thù.	",
				//                     "correct": false,
				//                     "numberOfRespondents": 14
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "mối quan hệ giữa hình tượng người anh hùng và các lực lượng siêu nhiên.	",
				//                     "correct": false,
				//                     "numberOfRespondents": 11
				//                 }
				//             ],
				//             "numberOfRespondents": 35
				//         }, 
				//         {
				//             "contentID": 2,
				//             "content":"Khung cảnh ăn mừng chiến thắng ở cuối đoạn trích Chiến thắng Mtao Mxây chủ yếu thể hiện ý nghĩa gì?", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "Tính dân tộc",
				//                     "correct": false,
				//                     "numberOfRespondents": 10
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "Tính cộng đồng",
				//                     "correct": true,
				//                     "numberOfRespondents": 11
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "Tính thực tiễn",
				//                     "correct": false,
				//                     "numberOfRespondents": 7
				//                 }
				//             ],
				//             "numberOfRespondents": 28
				//         },
				//         {
				//             "contentID": 3,
				//             "content":"Hình ảnh 'ngọc trai - giếng nước' trong Truyện An Dương Vương và Mị Châu - Trọng Thuỷ nói lên ý nghĩa gì?", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "Biểu trưng cho sự hoá giải của một mối oan tình.	",
				//                     "correct": false,
				//                     "numberOfRespondents": 12
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "Ngợi ca một tình yêu thuỷ chung, son sắt.	",
				//                     "correct": false,
				//                     "numberOfRespondents": 12
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "Ngợi ca sự trong sạch của Mị Châu.	",
				//                     "correct": true,
				//                     "numberOfRespondents": 4
				//                 }
				//             ],
				//             "numberOfRespondents": 28
				//         }
				//     ],
				//     "TacGia":"TacGia4",
				//     "topic": "Văn Học",
				//     "time": "12:20:44 15/09/2015",
				//     "duration": 15,
				//     "numberOfViews": 60,
				//     "numberOfVotes": 28,
				//     "title": "Văn học dân gian Việt Nam"
				// },
				// {
				//     "GoiID": 8,
				//     "questions": [
				//         {
				//             "contentID": 1,
				//             "content":"Trong văn bản “Con rồng cháu tiên” , người con trưởng theo Âu Cơ lên rừng được tôn lên làm gì?", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "Thủ lĩnh",
				//                     "correct": false,
				//                     "numberOfRespondents": 30
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "Tộc trưởng",
				//                     "correct": false,
				//                     "numberOfRespondents": 20
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "Vua",
				//                     "correct": true,
				//                     "numberOfRespondents": 40
				//                 }
				//             ],
				//             "numberOfRespondents": 90
				//         }, 
				//         {
				//             "contentID": 2,
				//             "content":"Văn bản “Con rồng cháu tiên” có sự kết hợp của những phương thức biểu đạt nào ?", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "Biêủ cảm và miêu tả",
				//                     "correct": false,
				//                     "numberOfRespondents": 30
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "Tự sự và miêu tả",
				//                     "correct": true,
				//                     "numberOfRespondents": 27
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "Miêu tả v à nghị luận",
				//                     "correct": false,
				//                     "numberOfRespondents": 25
				//                 }
				//             ],
				//             "numberOfRespondents": 82
				//         },
				//         {
				//             "contentID": 3,
				//             "content":"Văn bản “Con rồng cháu tiên” được kể nhằm mục đích gì ?", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": " Để làm cho cuộc sống lao động của người dân ý vị hơn",
				//                     "correct": false,
				//                     "numberOfRespondents": 30
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": " Để người đời sau thấy được trí tưởng tượng phong phú kì diệu của người xưa",
				//                     "correct": false,
				//                     "numberOfRespondents": 10
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": " Để giải thích suy tôn nguồn gốc giống nòi ; thể hiện ý nguyện đoàn kết của người x ưa",
				//                     "correct": true,
				//                     "numberOfRespondents": 39
				//                 }
				//             ],
				//             "numberOfRespondents": 79
				//         }
				//     ],
				//     "TacGia":"TacGia4",
				//     "topic": "Văn Học",
				//     "time": "12:20:44 15/09/2015",
				//     "duration": 15,
				//     "numberOfViews": 100,
				//     "numberOfVotes": 33,
				//     "title": "Con rồng cháu tiên"
				// },
				// {
				//     "GoiID": 9,
				//     "questions": [
				//         {
				//             "contentID": 1,
				//             "content":"Chi tiết bà con làng xóm vui mừng góp gạo nuôi  Gióng trong văn bản 'Thánh Gióng' có ý nghĩa gì?", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "Thể hiện sự thương cảm với gia đình Thánh Gióng",
				//                     "correct": false,
				//                     "numberOfRespondents": 5
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "Thể hiện lòng yêu nước nồng nàn  và tinh thần đoàn kết của nhân dân ta",
				//                     "correct": true,
				//                     "numberOfRespondents": 55
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "Thể hiện sự quan niệm “ hàng xóm láng giềng tối lửa tắt đèn có nhau”",
				//                     "correct": false,
				//                     "numberOfRespondents": 18
				//                 }
				//             ],
				//             "numberOfRespondents": 78
				//         }, 
				//         {
				//             "contentID": 2,
				//             "content":"Văn bản “Thánh Gióng” liên quan đến hội thi nào ?", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "Hội thi học sinh thanh lịch",
				//                     "correct": false,
				//                     "numberOfRespondents": 20
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "Hội khoẻ Phù Đổng",
				//                     "correct": true,
				//                     "numberOfRespondents": 30
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "Hội thi sáng tác văn học trẻ",
				//                     "correct": false,
				//                     "numberOfRespondents": 20
				//                 }
				//             ],
				//             "numberOfRespondents": 70
				//         },
				//         {
				//             "contentID": 3,
				//             "content":"Phương thức biểu đạt chính của văn bản “Thánh Gióng” là gì ?", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "Nghị luận",
				//                     "correct": false,
				//                     "numberOfRespondents": 10
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "Biểu cảm",
				//                     "correct": false,
				//                     "numberOfRespondents": 25
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "Tự sự",
				//                     "correct": true,
				//                     "numberOfRespondents": 30
				//                 }
				//             ],
				//             "numberOfRespondents": 65
				//         }
				//     ],
				//     "TacGia":"TacGia4",
				//     "topic": "Văn Học",
				//     "time": "13:10:44 15/10/2015",
				//     "duration": 15,
				//     "numberOfViews": 80,
				//     "numberOfVotes": 28,
				//     "title": "Thánh Gióng"
				// },
				// {
				//     "GoiID": 10,
				//     "questions": [
				//         {
				//             "contentID": 1,
				//             "content":"Một tế bào sinh dưỡng của một loài có bộ nhiễm sắc thể kí hiệu: AaBbDdEe bị rối loạn phân li 1 cặp nhiễm sắc thể Dd trong phân bào sẽ tạo ra 2 tế bào con có kí hiệu nhiễm sắc thể là:", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "AaBbDDddEe và AaBbEe.",
				//                     "correct": true,
				//                     "numberOfRespondents": 30
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "AaBbDDdEe và AaBbdEe.",
				//                     "correct": false,
				//                     "numberOfRespondents": 21
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "AaBbDddEe và AaBbdEe.",
				//                     "correct": false,
				//                     "numberOfRespondents": 10
				//                 }
				//             ],
				//             "numberOfRespondents": 61
				//         }, 
				//         {
				//             "contentID": 2,
				//             "content":"Ở một loài thực vật, gen A qui định tính trạng hạt đỏ trội hoàn toàn so với gen a qui định tính trạng lặn hạt màu trắng. Trong một phép lai, nếu ở thế hệ F 1 có tỉ lệ 35 cây hạt đỏ: 1 cây hạt trắng thì kiểu gen của các cây bố mẹ là:", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "AAa x AAa.",
				//                     "correct": false,
				//                     "numberOfRespondents": 10
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "AAa x AAaa, AAaa x AAaa.",
				//                     "correct": false,
				//                     "numberOfRespondents": 20
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "Cả A, B đúng",
				//                     "correct": true,
				//                     "numberOfRespondents": 28
				//                 }
				//             ],
				//             "numberOfRespondents": 58
				//         },
				//         {
				//             "contentID": 3,
				//             "content":"Cơ thể mà tế bào sinh dưỡng đều thừa 2 nhiễm sắc thể trên 2 cặp tương đồng được gọi là", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "thể tứ bội",
				//                     "correct": false,
				//                     "numberOfRespondents": 30
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "thể bốn.",
				//                     "correct": false,
				//                     "numberOfRespondents": 0
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "thể ba kép.",
				//                     "correct": true,
				//                     "numberOfRespondents": 28
				//                 }
				//             ],
				//             "numberOfRespondents": 58
				//         }
				//     ],
				//     "TacGia":"TacGia3",
				//     "topic": "Sinh Học",
				//     "time": "12:20:44 15/09/2016",
				//     "duration": 15,
				//     "numberOfViews": 65,
				//     "numberOfVotes": 28,
				//     "title": "Đột biến số lượng nhiễm sắc thể"
				// },
				// {
				//     "GoiID": 11,
				//     "questions": [
				//         {
				//             "contentID": 1,
				//             "content":"Employers often require that candidates have not only a degree .............", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "but two years experience ",
				//                     "correct": false,
				//                     "numberOfRespondents": 3
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "also two years experience",
				//                     "correct": false,
				//                     "numberOfRespondents": 18

				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "but also two-year experience ",
				//                     "correct": true,
				//                     "numberOfRespondents": 20
				//                 }
				//             ],
				//             "numberOfRespondents": 41
				//         }, 
				//         {
				//             "contentID": 2,
				//             "content":"Sedimentary rocks are formed below the surface of the earth ............... very high temperatures and pressures.", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "where there are",
				//                     "correct": true,
				//                     "numberOfRespondents": 20
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "where are there",
				//                     "correct": false,
				//                     "numberOfRespondents": 20
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "there are where",
				//                     "correct": false,
				//                     "numberOfRespondents": 1
				//                 }
				//             ],
				//             "numberOfRespondents": 41
				//         },
				//         {
				//             "contentID": 3,
				//             "content":"Clipper ships were the swiftest sailing ships that ...................... to sea and the most beautiful.", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "ever were put ",
				//                     "correct": false,
				//                     "numberOfRespondents": 0
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "ever were putted",
				//                     "correct": false,
				//                     "numberOfRespondents": 10
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "were ever putted",
				//                     "correct": true,
				//                     "numberOfRespondents": 20
				//                 }
				//             ],
				//             "numberOfRespondents": 30
				//         }
				//     ],
				//     "TacGia":"TacGia2",
				//     "topic": "Tiếng Anh",
				//     "time": "12:60:44 25/09/2015",
				//     "duration": 15,
				//     "numberOfViews": 50,
				//     "numberOfVotes": 28,
				//     "title": "Điền từ vào chỗ trống"
				// },
				// {
				//     "GoiID": 12,
				//     "questions": [
				//         {
				//             "contentID": 1,
				//             "content":"Experiments in the sonic imaging of moving objects ............... in both the United States and Europe well before the Second World War", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "were conducting ",
				//                     "correct": false,
				//                     "numberOfRespondents": 10
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "had been conducted",
				//                     "correct": false,
				//                     "numberOfRespondents": 21
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "have been conducted",
				//                     "correct": true,
				//                     "numberOfRespondents": 25
				//                 }
				//             ],
				//             "numberOfRespondents": 56
				//         }, 
				//         {
				//             "contentID": 2,
				//             "content":"............... photosynthesis were to stop, life would disappear from the planet Earth relatively quickly.", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "For",
				//                     "correct": false,
				//                     "numberOfRespondents": 11
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "If  ",
				//                     "correct": true,
				//                     "numberOfRespondents": 34
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "Although",
				//                     "correct": false,
				//                     "numberOfRespondents": 5
				//                 }
				//             ],
				//             "numberOfRespondents": 51
				//         },
				//         {
				//             "contentID": 3,
				//             "content":"America's first globe maker was James Wilson, who ................... and blacksmith in his earlier life.", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "a farmer had been",
				//                     "correct": false,
				//                     "numberOfRespondents": 20
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "being a farmer",
				//                     "correct": false,
				//                     "numberOfRespondents": 20
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "had been a farmer",
				//                     "correct": true,
				//                     "numberOfRespondents": 11
				//                 }
				//             ],
				//             "numberOfRespondents": 51
				//         }
				//     ],
				//     "TacGia":"TacGia2",
				//     "topic": "Tiếng Anh",
				//     "time": "23:20:44 25/10/2015",
				//     "duration": 15,
				//     "numberOfViews": 60,
				//     "numberOfVotes": 58,
				//     "title": "Tiếng Anh trắc nghiệm lớp 11"
				// },
				// {
				//     "GoiID": 13,
				//     "questions": [
				//         {
				//             "contentID": 1,
				//             "content":"Trong văn bản “Sơn Tinh,Thuỷ Tinh”, vua Hùng đã không làm gì khi Sơn Tinh và Thuỷ Tinh đến cầu hôn Mị Nương ?", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "Vua Hùng băn khoăn không biết nhận lời ai và  từ chối ai",
				//                     "correct": false,
				//                     "numberOfRespondents": 20
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": " Vua hẹn ngày hôm sau , ai mang lễ vật đến trước sẽ được lấy Mị Nương",
				//                     "correct": false,
				//                     "numberOfRespondents": 20
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": " Vua hỏi ý kiến công chúa Mị Nương xem nàng muốn lấy ai",
				//                     "correct": true,
				//                     "numberOfRespondents": 20
				//                 }
				//             ],
				//             "numberOfRespondents": 60
				//         }, 
				//         {
				//             "contentID": 2,
				//             "content":"Trong văn bản “Sơn Tinh , Thuỷ Tinh”, chi tiết nào dưới đây mang dấu ấn lịch sử ?", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "Thần núi Sơn Tinh và thần biển Thuỷ Tinh cùng đến cầu hôn Mị Nương",
				//                     "correct": false,
				//                     "numberOfRespondents": 20
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "Hiện tượng  lũ lụt vẫn  xảy ra vào tháng bảy , tháng tám ( âm lịch ) hàng năm ở  Bắc Bộ",
				//                     "correct": true,
				//                     "numberOfRespondents": 10
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "Thần Thuỷ Tinh đã dùng phép lạ của mình để hô mưa gọi gió làm thành giông bão",
				//                     "correct": false,
				//                     "numberOfRespondents": 20
				//                 }
				//             ],
				//             "numberOfRespondents": 50
				//         },
				//         {
				//             "contentID": 3,
				//             "content":"Nguyên nhân chính  dẫn tới cuộc giao tranh giữa Thuỷ Tinh và Sơn Tinh là :", 
				//             "Answers": [
				//                 {
				//                     "_id":1,
				//                     "content": "Thuỷ Tinh mang lễ vật đến sau  không lấy được Mị Nương",
				//                     "correct": true,
				//                     "numberOfRespondents": 30
				//                 },
				//                 {
				//                     "_id":2,
				//                     "content": "Vua Hùng làm lễ kén rể cho con gái Mị Nương",
				//                     "correct": false,
				//                     "numberOfRespondents": 5
				//                 },
				//                 {
				//                     "_id":3,
				//                     "content": "Mị Nương đem lòng yêu Sơn Tinh và căm ghét Thuỷ Tinh",
				//                     "correct": false,
				//                     "numberOfRespondents": 15
				//                 }
				//             ],
				//             "numberOfRespondents": 50
				//         }
				//     ],
				//     "TacGia":"TacGia4",
				//     "topic": "Văn Học",
				//     "time": "22:20:44 15/09/2016",
				//     "duration": 15,
				//     "numberOfViews": 56,
				//     "numberOfVotes": 28,
				//     "title": "Sơn Tinh - Thủy Tinh"
				// }

			];
		quizPackets.forEach((quizpacket: QuizPacket) => QuizPackets.insert(quizpacket))

	}
}
