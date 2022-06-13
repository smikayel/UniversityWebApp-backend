import Joi from 'joi'

export default {
  createTestSchema: {
    body: Joi.object({
      userId: Joi.number().strict().required(),
      name: Joi.string().min(3).required(),
      subjectId: Joi.number().strict().required(),
      start: Joi.string().required(),
      length: Joi.number().strict().required(),
      highestScore: Joi.number().strict().required(),
      questions: Joi.array().items(Joi.object({
        name: Joi.string().max(160).required(),
      })),
      answers: Joi.array().items(Joi.array().items(Joi.object({
        name: Joi.string().max(160).required(),
        isCorrect: Joi.boolean().required(),
      }))),
    }),
  },
}

