export const Services = {
    getAllPolls: '/users/get-all-polls',
    getAllQuestions: (poll_Id) => '/users/get-all-questions/' + poll_Id,
    sendPollAnswers: '/users/send-poll-results',
    sendPoll: '/users/send-poll',
    deleteOption: '/users/delete-option',
    addOption: '/users/add-option',
    updateQuestion: '/users/update-question',
    deleteQuestion: '/users/delete-question',
    deletePoll: '/users/delete-poll',
    addQuestion: '/users/add-question',
}