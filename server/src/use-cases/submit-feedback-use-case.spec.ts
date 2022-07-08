import { SubmitFeedbackUseCase } from "./subimit-feedback-use-case";

// spies = espiões

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

describe('Submit feedback', () => {

  const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
  );

  it('should be able to submit a feedback', async () => {
  
      await expect(submitFeedback.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'data:image/png;base64',
      })).resolves.not.toThrow();

      expect(createFeedbackSpy).toHaveBeenCalled();
      expect(sendMailSpy).toHaveBeenCalled();
  })

  it('should not be able to submit a feedback without type', async () => {
    
      await expect(submitFeedback.execute({
        type: '',
        comment: 'example comment',
        screenshot: 'data:image/png;base64',
      })).rejects.toThrow();
  })

  it('should not be able to submit a feedback without comment', async () => {
    
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64',
    })).rejects.toThrow();
  })

  it('should not be able to submit a feedback with an invalid screenshot', async () => {
    
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'teste teste',
      screenshot: 'data:image/png',
    })).rejects.toThrow();
  })

})