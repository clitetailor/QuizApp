export default function removeAnswers(packet) {
	packet.questions.answers = packet.questions.answers.map(answer => {
		const newAnswer = Object.assign({}, answer, {
			correct: undefined
		})

		return newAnswer;
	})

	return packet;
}