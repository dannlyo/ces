<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submission Update - Citizen Connect</title>
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
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 12px;
            padding: 40px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .status-icon {
            margin: 0 auto 30px;
            width: 80px;
            height: 80px;
            background-color: #3b82f6;
            border-radius: 50%;
            display: table;
        }

        .icon {
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
            margin-bottom: 20px;
            font-weight: bold;
        }

        .status-badge {
            display: inline-block;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 25px;
            background-color: #10b981;
            color: white;
        }

        p {
            color: #4b5563;
            line-height: 1.6;
            margin-bottom: 20px;
            text-align: center;
        }

        .tracking-box {
            background: #f8fafc;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            padding: 20px;
            margin: 25px 0;
        }

        .tracking-id {
            background: #3b82f6;
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            font-weight: bold;
            font-size: 24px;
            display: block;
            text-align: center;
            margin: 15px auto;
            width: 80%;
        }

        .response-details {
            background: #f0f9ff;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            text-align: left;
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
            margin: 20px auto;
            transition: background-color 0.3s;
        }

        .button:hover {
            background-color: #374151;
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

        .timeline {
            margin: 25px 0;
            padding: 20px;
            background: #ffffff;
            border-radius: 8px;
            text-align: left;
        }

        .timeline-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 15px;
            padding-left: 20px;
            border-left: 2px solid #e5e7eb;
        }

        .timeline-date {
            font-size: 14px;
            color: #6b7280;
            min-width: 100px;
        }

        .timeline-content {
            margin-left: 15px;
        }

        @media only screen and (max-width: 480px) {
            .container {
                padding: 30px 20px;
                margin: 10px;
                width: calc(100% - 20px) !important;
            }
            
            h2 {
                font-size: 24px;
            }
            
            .tracking-id {
                font-size: 20px;
                padding: 12px 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="status-icon">
            <div class="icon">📝</div>
        </div>
        
        <h2>Submission Status Update</h2>
        <div class="status-badge">{{ $status ?? 'Pending' }}</div>

        <div class="tracking-box">
            <p><strong>Your Tracking ID:</strong></p>
            <div class="tracking-id">{{ $sid }}</div>
        </div>

        <div class="response-details">
            <h3 style="margin-bottom: 15px; color: #1f2937;">Response Details</h3>
            <p style="text-align: left; margin-bottom: 10px;">
                <strong>Last Updated:</strong> {{ $updated_at ?? 'Recently' }}
            </p>
            <p style="text-align: left; margin-bottom: 10px;">
                <strong>Agency:</strong> {{ $agency ?? 'Relevant Agency' }}
            </p>
            <p style="text-align: left;">
                <strong>Response:</strong><br>
                {{ $response ?? 'Your submission is currently being reviewed by our team. We will provide updates as soon as possible.' }}
            </p>
        </div>

        <p><strong>Want to check your submission status or add more details?</strong></p>
        <a href="https://ces-gkee.vercel.app/track?sid={{ $sid }}" class="button">
            Track & Update Submission →
        </a>

        <div class="note">
            <strong>🔒 Security Note:</strong> Keep this tracking ID private and secure. You'll need it to check your submission status and provide additional information if needed.
        </div>
    </div>
</body>
</html>