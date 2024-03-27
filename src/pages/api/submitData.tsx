export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    try {
      // Extract data from the request body
      const { segmentData } = req.body;

      // Make a POST request to the webhook URL
      const response = await fetch(
        'https://webhook.site/d7d8a95c-3e6d-4650-9c02-2831bcc84de4',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(segmentData), // Assuming data is an object
        }
      );

      // Check if the request was successful
      if (response.ok) {
        // Data successfully sent to the webhook
        console.log('Data sent successfully');
        res.status(200).json({ message: 'Data sent successfully' });
      } else {
        // Request failed
        console.error('Failed to send data to webhook');
        res.status(500).json({ error: 'Failed to send data to webhook' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Handle other HTTP methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
