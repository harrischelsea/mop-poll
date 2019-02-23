export const Services = {
    getAllPolls: '/users/get-all-polls',
    getAllQuestions: (poll_Id) => '/users/get-all-questions/' + poll_Id,
    sendPollAnswers: '/users/send-poll-results',
}