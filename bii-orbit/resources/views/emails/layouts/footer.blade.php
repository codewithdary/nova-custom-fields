<!-- footer-white -->
<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
    <tbody>
       <tr>
           <td
               class="o_bg-light o_px-xs o_pb-lg o_xs-pb-xs"
               align="center"
               style="background-color: #dbe5ea;padding-left: 8px;padding-right: 8px;padding-bottom: 2px; text-align: center;">
            <!--[if mso]>
            <Table width="632" cellspacing="0" cellpadding="0" border="0" role="presentation">
                <tbody>
                    <tr>
                        <td><![endif]-->
                            <table
                                class="o_block"
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                border="0"
                                role="presentation"
                                style="max-width: 632px;margin: 0 auto;">

                                <tbody>
                                    <tr>
                                        <td
                                            class="o_bg-white o_px-md o_py-lg o_bt-light o_br-b o_sans o_text-xs o_text-light"
                                            align="center"
                                            style="font-family:'Poppins', sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 14px;line-height: 21px;background-color: #ffffff;color: #82899a;border-top: 1px solid #d3dce0;border-radius: 0px 0px 20px 20px;;padding-left: 24px;padding-right: 24px;padding-top: 32px;padding-bottom: 32px;">

                                            <p class="o_mb" style="margin-top: 0px;margin-bottom: 16px; font-family:'Poppins', sans-serif; margin: 0 auto; text-align: center;">
                                                <a
                                                    class="o_text-primary"
                                                    href="{{ config('helpers.url') }}"
                                                    style="text-decoration: none;outline: none;color: #126de5;">

                                                    <img
                                                        src="{{ asset('logo/bii_logo_dark.png') }}"
                                                        width="80"
                                                        height="80"
                                                        alt="{{ config('app.name') }} logo"
                                                        style="max-width: 80px;-ms-interpolation-mode: bicubic;vertical-align: middle;border: 0;line-height: 100%;height: auto;outline: none;text-decoration: none;"
                                                    />
                                                </a>
                                            </p>

                                            <p style="margin-top: 20px;margin-bottom: 0px; color: #919AA7; font-size: 12px; font-family:'Poppins', sans-serif; text-align: center;">
                                                {{ __('mail.footer_text') }}
                                                <a href="{{ "mailto:" . __('mail.contact_email')  }}" style="margin-top: 20px;margin-bottom: 0px; color: #152e4d; font-size: 12px; word-break: break-all;">
                                                    {{ __('mail.contact_email') }}
                                                </a>
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        <!--[if mso]></td>
                    </tr>
                </Table><![endif]-->

            <div class="o_hide-xs" style="font-size: 64px; line-height: 64px; height: 64px;">
                &nbsp;
            </div>
        </td>
       </tr>
    </tbody>
</table>
