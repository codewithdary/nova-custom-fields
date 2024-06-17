@extends('.emails/layouts/app')

@section('content')
    <table border="0" width="100%" align="center" cellpadding="0" cellspacing="0" style="width:100%;max-width:100%;">
        <tr>
            <td align="center" valign="middle" bgcolor="#F1F1F1" style="background-color: #F1F1F1;">
                <table border="0" width="600" align="center" cellpadding="0" cellspacing="0" class="row" style="width:600px;max-width:600px;">
                    <tr>
                        <td align="center" bgcolor="#FFFFFF" style="background-color: #FFFFFF;">
                            <table border="0" width="600" align="center" cellpadding="0" cellspacing="0" class="row" style="width:600px;max-width:600px;">
                                <tr>
                                    <td align="center" valign="middle">
                                        <table border="0" width="100%" cellpadding="0" cellspacing="0" align="center" style="width:100%; max-width:100%;">
                                            <tr>
                                                <td style="font-size:20px;height:20px;line-height:20px;">&nbsp;</td>
                                            </tr>

                                            <tr>
                                                <td align="center" valign="middle">
                                                    <img
                                                        src="{{ asset("images/sample-bii-1.jpg") }}"
                                                        width="100%"
                                                        border="0"
                                                        alt="Hero Image"
                                                        style="display:block;border:0;width:100%;max-width:100%;">
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style="font-size:20px;height:20px;line-height:20px;">&nbsp;</td>
                                            </tr>
                                        </table>

                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

    <table border="0" width="100%" align="center" cellpadding="0" cellspacing="0" style="width:100%;max-width:100%;">
        <tr>
            <td align="center" valign="middle" bgcolor="#F1F1F1" style="background-color: #F1F1F1;">
                <table border="0" width="600" align="center" cellpadding="0" cellspacing="0" class="row" style="width:600px;max-width:600px;">
                    <tr>
                        <td align="center" bgcolor="#FFFFFF" style="background-color: #FFFFFF;">
                            <table width="520" border="0" cellpadding="0" cellspacing="0" align="center" class="row" style="width:520px;max-width:520px;">
                                <tr>
                                    <td align="center" class="container-padding">
                                        <table border="0" width="100%" cellpadding="0" cellspacing="0" align="center" style="width:100%; max-width:100%;">
                                            <tr>
                                                <td style="font-size:20px;height:20px;line-height:20px;">&nbsp;</td>
                                            </tr>

                                            <tr>
                                                <td align="center" valign="middle" style="font-family:'Poppins', sans-serif;color:#191919;font-size:22px;line-height:32px;font-weight:700;letter-spacing:0px;padding:0;padding-bottom:10px;">
                                                    {{ $event->title }} has been modified!
                                                </td>
                                            </tr>

                                            <tr>
                                                <td align="center" valign="middle" style="font-family:'Poppins', sans-serif;color:#939393;font-size:14px;line-height:24px;font-weight:400;letter-spacing:0px;padding:0;padding-bottom:10px;">
                                                    We hope this email finds you well. We wanted to take a moment to notify you about some exciting updates regarding the following event: <span style="font-weight: bold; color: #00464B;">{{ $event->title }}</span>.
                                                    <br/><br/>
                                                </td>
                                            </tr>

                                            <tr style="">
                                                <table style="text-align: center; width:100%;">
                                                    <tr style="padding:10px;">
                                                        <th style="font-family:'Poppins', sans-serif;color:#191919;font-size:14px;font-weight:700;letter-spacing:0px;padding:0;padding-bottom:6px;">
                                                            Title
                                                        </th>
                                                        <th  style="font-family:'Poppins', sans-serif;color:#191919;font-size:14px;font-weight:700;letter-spacing:0px;padding:0;padding-bottom:6px;">
                                                            Start Time
                                                        </th>
                                                        <th  style="font-family:'Poppins', sans-serif;color:#191919;font-size:14px;font-weight:700;letter-spacing:0px;padding:0;padding-bottom:6px;">
                                                            End Time
                                                        </th>
                                                        <th  style="font-family:'Poppins', sans-serif;color:#191919;font-size:14px;font-weight:700;letter-spacing:0px;padding:0;padding-bottom:6px;">
                                                            Host
                                                        </th>
                                                    </tr>
                                                    <tr style="text-align: center;">
                                                        <td style="padding-right:10px; padding-top: 20px; padding-bottom: 40px; font-family:'Poppins', sans-serif;color:#939393;font-size:14px;letter-spacing:0px;">
                                                            {{ $event->title }}
                                                        </td>
                                                        <td style="padding-right:10px; padding-top: 20px; padding-bottom: 40px; font-family:'Poppins', sans-serif;color:#939393;font-size:14px;letter-spacing:0px;">
                                                            {{ $event->date_start->format("M jS H:m") }}
                                                        </td>
                                                        <td style="padding-right:10px; padding-top: 20px; padding-bottom: 40px; font-family:'Poppins', sans-serif;color:#939393;font-size:14px;letter-spacing:0px;">
                                                            {{ $event->date_end->format("M jS H:m") }}
                                                        </td>
                                                        <td style="padding-right:10px; padding-top: 20px; padding-bottom: 40px; font-family:'Poppins', sans-serif;color:#939393;font-size:14px;letter-spacing:0px;">
                                                            {{ $event->host_name }}
                                                        </td>
                                                    </tr>
                                                </table>
                                            </tr>

                                            <tr>
                                                <td align="center" valign="middle" style="font-family:'Poppins', sans-serif;color:#939393;font-size:14px;line-height:24px;font-weight:400;letter-spacing:0px;padding:0;padding-bottom:10px;">
                                                    All event details are available through the button below.
                                                    <br/><br/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" valign="middle">
                                                    <table border="0" align="center" cellpadding="0" cellspacing="0">
                                                        <tr>
                                                            <td
                                                                align="center"
                                                                style="background-color:#00464B;display:block;mso-padding-alt:14px 40px 14px 40px;border-radius:45px;">
                                                                <a
                                                                    target="_blank"
                                                                    href="{{url('/').'/calendar/'.$event->id}}"
                                                                    style="color:#FFFFFF;font-family:'Poppins', sans-serif;font-size:14px;font-weight:600;letter-spacing:0px;line-height:24px;display:block;padding:14px 40px 14px 40px;text-decoration:none;white-space:nowrap;">
                                                                    Review Event
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style="font-size:20px;height:20px;line-height:20px;">&nbsp;</td>
                                            </tr>
                                        </table>

                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

    <table border="0" width="100%" align="center" cellpadding="0" cellspacing="0" style="width:100%;max-width:100%;">
        <tr>
            <td align="center" valign="middle" bgcolor="#F1F1F1" style="background-color: #F1F1F1;">
                <table border="0" width="600" align="center" cellpadding="0" cellspacing="0" class="row" style="width:600px;max-width:600px;">
                    <tr>
                        <td align="center" bgcolor="#FFFFFF" style="background-color: #FFFFFF;">
                            <table width="520" border="0" cellpadding="0" cellspacing="0" align="center" class="row" style="width:520px;max-width:520px;">
                                <tr>
                                    <td align="center" class="container-padding">
                                        <table border="0" width="100%" cellpadding="0" cellspacing="0" align="center" style="width:100%; max-width:100%;">
                                            <tr>
                                                <td style="font-size:20px;height:20px;line-height:20px;">&nbsp;</td>
                                            </tr>

                                            <tr>
                                                <td style="background-color:#F1F1F1;font-size:3px;height:3px;line-height:3px;">&nbsp;</td>
                                            </tr>

                                            <tr>
                                                <td style="font-size:20px;height:20px;line-height:20px;">&nbsp;</td>
                                            </tr>
                                        </table>

                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
@endsection
