import { QuizPackets } from '../../../both/collections/quizzes.collection';
import { QuizPacket } from '../../../both/models/quiz.model';
import { Topics } from '../../../both/collections/topics.collection';
import { Topic } from '../../../both/models/topic.model'

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
			];

		quizPackets.forEach((quizpacket: QuizPacket) => QuizPackets.insert(quizpacket))
		quizPackets.map(packet => packet.topic).forEach((topic: string) => {
			console.log('1')
			let records = Topics.find({}).fetch();

			console.log(records);
			if (records.findIndex(record => record.title === topic) === -1) {
				console.log('2')
				Topics.insert({ title: topic })
			}
		})
	}
}
