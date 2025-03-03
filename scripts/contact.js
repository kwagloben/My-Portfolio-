const apiKey = 're_123456789'; // Replace with your actual API key

const sendEmail = async () => {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'Acme <onboarding@resend.dev>',
      to: ['kwagloben@gmail.com'],
      subject: 'hello world',
      html: '<p>it works!</p>'
    })
  });

  const data = await response.json();
  console.log(data);
};

// sendEmail();
