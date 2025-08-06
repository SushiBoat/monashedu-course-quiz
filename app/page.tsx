'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState('');
  const [lang, setLang] = useState<'zh' | 'en'>('zh');

  const handleAnswer = (choice: 'A' | 'B') => {
    const updatedAnswers = [...answers, choice];
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setAnswers(updatedAnswers);
    } else {
      const aCount = updatedAnswers.filter(a => a === 'A').length;
      const bCount = updatedAnswers.filter(b => b === 'B').length;

      if (aCount > bCount) {
        setResult(lang === 'zh' ? '你更适合学习教育课程，成为一名教师。' : 'You are more suited to study Education and become a teacher.');
      } else if (bCount > aCount) {
        setResult(lang === 'zh' ? '你更适合学习学习设计与技术课程，未来可以成为一名学习设计师。' : 'You are more suited to study Learning Design and Technology and become a learning designer.');
      } else {
        setResult(lang === 'zh' ? '好消息！你既适合当老师，也适合当学习设计师。' : 'Good news! You could be either a teacher or a learning designer.');
      }
    }
  };

  const questions = [
    {
      zh: '1. 你更希望未来的工作环境是：',
      en: '1. What kind of future work environment do you prefer?',
      a_zh: 'A. 面对学生、直接教学、与人互动频繁',
      b_zh: 'B. 设计课程内容，用科技或创意解决学习问题',
      a_en: 'A. Working with students directly in a highly interactive classroom',
      b_en: 'B. Designing educational content and solving problems with creativity and technology'
    },
    {
      zh: '2. 你在学习中更享受哪一类事情？',
      en: '2. What kind of learning activities do you enjoy more?',
      a_zh: 'A. 向别人讲解知识、帮助同学理解难题',
      b_zh: 'B. 设计PPT、剪视频、用工具呈现知识',
      a_en: 'A. Explaining concepts to others and helping classmates understand',
      b_en: 'B. Designing slides, editing videos, and presenting knowledge visually'
    },
    {
      zh: '3. 你觉得自己未来更像：',
      en: '3. Who do you see yourself as in the future?',
      a_zh: 'A. 学生成长路上的引路人',
      b_zh: 'B. 用创意与科技改变教育的设计者',
      a_en: 'A. A guide for students in their learning journey',
      b_en: 'B. A designer who transforms education with creativity and technology'
    },
    {
      zh: '4. 你更擅长：',
      en: '4. What are you better at?',
      a_zh: 'A. 口头表达、与人沟通',
      b_zh: 'B. 内容整理、信息结构和视觉呈现',
      a_en: 'A. Verbal communication and interpersonal skills',
      b_en: 'B. Organising information and presenting it visually'
    },
    {
      zh: '5. 你理想的工作目标是：',
      en: '5. What is your ideal career goal?',
      a_zh: 'A. 成为一名老师，走进学校教书育人',
      b_zh: 'B. 进入教育科技公司或企业，设计创新学习体验',
      a_en: 'A. Become a teacher in a school setting',
      b_en: 'B. Join an edtech company to design innovative learning experiences'
    },
    {
      zh: '6. 你如何看待技术在学习中的作用？',
      en: '6. What role do you think technology plays in learning?',
      a_zh: 'A. 技术是辅助，人与人的互动最重要',
      b_zh: 'B. 技术是关键，我希望深入探索它如何提升学习效果',
      a_en: 'A. Technology is supportive, but human interaction is most important',
      b_en: 'B. Technology is essential, and I want to explore how it can improve learning'
    }
  ];

  const q = questions[current];

  return (
    <div style={{ minHeight: '100vh', padding: '40px 20px', background: 'linear-gradient(135deg, #f3f9ff, #d6e8f5)', fontFamily: 'Helvetica, Arial, sans-serif', lineHeight: 1.6 }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <header style={{ backgroundColor: '#002145', padding: '1rem', color: 'white', textAlign: 'center', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h1 style={{ margin: 0, fontSize: '1.8rem' }}>Monash University | 教育课程匹配问卷</h1>
          <div style={{ marginTop: '10px' }}>
            <button onClick={() => setLang('zh')} style={{ marginRight: '10px', padding: '6px 12px', borderRadius: '4px', border: 'none', background: '#ffffff', color: '#002145', cursor: 'pointer' }}>中文</button>
            <button onClick={() => setLang('en')} style={{ padding: '6px 12px', borderRadius: '4px', border: 'none', background: '#ffffff', color: '#002145', cursor: 'pointer' }}>English</button>
          </div>
        </header>

        {!result ? (
          <div style={{ marginTop: '40px', background: '#ffffff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', color: '#002145' }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{lang === 'zh' ? q.zh : q.en}</p>
            <button onClick={() => handleAnswer('A')} style={{ marginBottom: '16px', padding: '14px 20px', width: '100%', backgroundColor: '#0055A2', color: 'white', border: 'none', borderRadius: '6px', fontSize: '1rem', cursor: 'pointer' }}>{lang === 'zh' ? q.a_zh : q.a_en}</button>
            <button onClick={() => handleAnswer('B')} style={{ padding: '14px 20px', width: '100%', backgroundColor: '#00A2D3', color: 'white', border: 'none', borderRadius: '6px', fontSize: '1rem', cursor: 'pointer' }}>{lang === 'zh' ? q.b_zh : q.b_en}</button>
          </div>
        ) : (
          <div style={{ fontSize: '20px', fontWeight: 'bold', padding: '30px', border: '2px solid #ccc', marginTop: '40px', background: '#ffffff', color: '#002145', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>{result}</div>
        )}
      </div>
    </div>
  );
}
