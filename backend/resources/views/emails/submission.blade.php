<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submission Confirmation - Citizen Connect</title>
    <style>
        body, div, p, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
            margin: 0;
            padding: 0;
            width: 100% !important;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            background-color: #f4f4f5;
        }

        .container {
            max-width: 550px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 8px;
            padding: 40px;
            text-align: center;
        }

        .success-icon {
            margin: 0 auto 30px;
            width: 80px;
            height: 80px;
            background-color: #10b981;
            border-radius: 50%;
            display: table;
        }

        .checkmark {
            color: #ffffff;
            font-size: 40px;
            display: table-cell;
            vertical-align: middle;
            text-align: center;
        }

        h2 {
            color: #1f2937;
            text-align: center;
            font-size: 28px;
            margin-bottom: 30px;
            font-weight: bold;
            font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
        }

        p {
            color: #4b5563;
            line-height: 1.6;
            margin-bottom: 20px;
            text-align: center;
            font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
        }

        .highlight {
            background: #3b82f6;
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            font-weight: bold;
            font-size: 24px;
            display: block;
            text-align: center;
            margin: 25px auto;
            width: 80%;
        }

        .button {
            display: inline-block;
            width: auto;
            min-width: 200px;
            padding: 16px 24px;
            background-color: #1f2937;
            color: #ffffff !important;
            text-decoration: none;
            border-radius: 8px;
            text-align: center;
            font-weight: bold;
            margin: 30px auto;
            font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
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

        @media only screen and (max-width: 480px) {
            .container {
                padding: 30px 20px;
                width: 100% !important;
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
        <div class="success-icon">
            <div class="checkmark">✓</div>
        </div>
        <h2>Submission Received!</h2>
        <p>Thank you for your submission to <strong>Citizen Connect</strong>. We're on it!</p>

        <p>Your unique tracking ID is:</p>

        <div class="highlight">{{ $sid }}</div>
        
        <p>Want to check your submission status?</p>
        <a href="https://ces-gkee.vercel.app/track?sid={{ $sid }}" class="button">
            Track My Submission →
        </a>

        <div class="note">
            <strong>🔒 Security Note:</strong> Keep this tracking ID private and secure.
        </div>
    </div>
</body>
</html>