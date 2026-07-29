const ALL_QUESTIONS = LESSONS.flatMap(l => l.questions.map(q => ({...q, lessonId:l.id, subject:l.subject})));
