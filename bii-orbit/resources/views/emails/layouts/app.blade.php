@props(['title'])
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>{{ $title }} - {{ config('app.name') }}</title>
    <style type="text/css">
        a { text-decoration: none; outline: none; }
        @media (max-width: 649px) {
            .o_col-full { max-width: 100% !important; }
            .o_col-half { max-width: 50% !important; }
            .o_hide-lg { display: inline-block !important; font-size: inherit !important; max-height: none !important; line-height: inherit !important; overflow: visible !important; width: auto !important; visibility: visible !important; }
            .o_hide-xs, .o_hide-xs.o_col_i { display: none !important; font-size: 0 !important; max-height: 0 !important; width: 0 !important; line-height: 0 !important; overflow: hidden !important; visibility: hidden !important; height: 0 !important; }
            .o_xs-center { text-align: center !important; }
            .o_xs-left { text-align: left !important; }
            .o_xs-right { text-align: left !important; }
            table.o_xs-left { margin-left: 0 !important; margin-right: auto !important; float: none !important; }
            table.o_xs-right { margin-left: auto !important; margin-right: 0 !important; float: none !important; }
            table.o_xs-center { margin-left: auto !important; margin-right: auto !important; float: none !important; }
            h1.o_heading { font-size: 32px !important; line-height: 41px !important; }
            h2.o_heading { font-size: 26px !important; line-height: 37px !important; }
            h3.o_heading { font-size: 20px !important; line-height: 30px !important; }
            .o_xs-py-md { padding-top: 24px !important; padding-bottom: 24px !important; }
            .o_xs-pt-xs { padding-top: 8px !important; }
            .o_xs-pb-xs { padding-bottom: 8px !important; }
        }
        @media screen {
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                src: local('Poppins Regular'), local('Poppins-Regular'), url(https://fonts.gstatic.com/s/poppins/v6/pxiEyp8kv8JHgFVrJJfecg.woff2) format('woff2');
            }
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                src: local('Poppins Medium'), local('Poppins-Medium'), url(https://fonts.gstatic.com/s/poppins/v6/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2) format('woff2');
            }
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 700;
                src: local('Poppins Bold'), local('Poppins-Bold'), url(https://fonts.gstatic.com/s/poppins/v6/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2) format('woff2');
            }
        }
    </style>
    <!--[if mso]>
    <style>
        Table { border-collapse: collapse; }
        .o_col { float: left; }
    </style>
    <xml>
        <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
</head>
<body class="o_body o_bg-light" style="width: 100%;margin: 0px;padding: 0px;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;background-color: #dbe5ea;">
<x-email.preview />

<x-email.logo />

@yield('content')

<x-email.divider />

@include('.emails/layouts/footer')

</body>
</html>
