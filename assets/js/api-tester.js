
// boosys-landing/assets/js/api-tester.js
document.getElementById('api-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const endpoint = document.getElementById('api-endpoint').value.trim();
  const method = document.getElementById('api-method').value;
  const payload = document.getElementById('api-payload').value.trim();
  const resultBox = document.getElementById('api-result');

  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    // Hanya sertakan body jika metode bukan GET
    if (method !== 'GET' && payload) {
      options.body = payload;
    }

    const response = await fetch(endpoint, options);
    const contentType = response.headers.get('content-type');

    if (!response.ok) {
      throw new Error(`Status ${response.status}: ${response.statusText}`);
    }

    let result;
    if (contentType && contentType.includes('application/json')) {
      result = await response.json();
    } else {
      result = await response.text();
    }

    resultBox.textContent = typeof result === 'object'
      ? JSON.stringify(result, null, 2)
      : result;
  } catch (err) {
    resultBox.textContent = '❌ Error: ' + err.message;
  }
});
