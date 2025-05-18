<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submission Confirmation - Citizen Connect</title>
    <style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            margin: 0;
            padding: 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #1f2937;
        }

        .container {
            max-width: 550px;
            margin: 20px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 16px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            padding: 40px;
            animation: fadeIn 0.8s ease-out;
        }

        .success-icon {
            width: 80px;
            height: 80px;
            background: #10b981;
            border-radius: 50%;
            margin: 0 auto 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: float 3s ease-in-out infinite;
        }

        .success-icon::before {
            content: "✓";
            color: white;
            font-size: 40px;
        }

        h2 {
            color: #1f2937;
            text-align: center;
            font-size: 28px;
            margin-bottom: 30px;
            font-weight: 700;
        }

        p {
            color: #4b5563;
            line-height: 1.6;
            margin-bottom: 20px;
            text-align: center;
        }

        .highlight {
            background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
            color: white;
            padding: 15px 25px;
            border-radius: 12px;
            font-weight: 600;
            font-size: 24px;
            display: block;
            text-align: center;
            margin: 25px 0;
            animation: pulse 2s infinite;
            box-shadow: 0 10px 20px -5px rgba(59, 130, 246, 0.3);
        }

        .link {
            display: block;
            width: 100%;
            padding: 16px 24px;
            background: #1f2937;
            color: white;
            text-decoration: none;
            border-radius: 12px;
            text-align: center;
            font-weight: 600;
            margin-top: 30px;
            transition: all 0.3s ease;
            box-sizing: border-box;
        }

        .link:hover {
            background: #111827;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.2);
        }

        .note {
            font-size: 14px;
            color: #6b7280;
            margin-top: 30px;
            padding: 15px;
            background: #f3f4f6;
            border-radius: 8px;
            text-align: center;
        }

        @media (max-width: 480px) {
            .container {
                padding: 30px 20px;
            }
            
            h2 {
                font-size: 24px;
            }
            
            .highlight {
                font-size: 20px;
                padding: 12px 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="success-icon"></div>
        <h2>Submission Received!</h2>
        <p>Thank you for your submission to <strong>Citizen Connect</strong>. We're on it!</p>

        <p>Your unique tracking ID is:</p>

        <div class="highlight">SB-423423</div>

        <p>Want to check your submission status?</p>
        <a href="https://citizenconnect.example.com/track" class="link" target="_blank">
            Track My Submission →
        </a>

        <div class="note">
            <strong>🔒 Security Note:</strong> Keep this tracking ID private and secure.
        </div>
    </div>
</body>
</html>