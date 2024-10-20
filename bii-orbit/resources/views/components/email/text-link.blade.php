@props(['text', 'link'])

<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
    <tbody>
        <tr>
            <td
                class="o_bg-light o_px-xs"
                align="left"
                style="background-color: #dbe5ea;padding-left: 8px;padding-right: 8px;">

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
                                                class="o_bg-white o_px-md o_py o_sans o_text o_text-secondary"
                                                align="left"
                                                style="font-family:'Poppins', sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 15px;line-height: 24px;background-color: #ffffff;color: #424651;padding-left: 24px;padding-right: 24px;padding-top: 0px;padding-bottom: 16px;">

                                                <p style="family: Cerebri, sans-serif !important; font-weight: 400; margin-top: 0px;margin-bottom: 0px; color: #6e84a3; font-size: 15px;">
                                                    {{ $text }} <a href="{{ $link }}" style="margin-top: 20px;margin-bottom: 0px; color: #152e4d; word-break: break-all; text-decoration: underline;"> {{ $link }} </a>
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            <!--[if mso]></td>
                        </tr>
                    </Table><![endif]-->
            </td>
        </tr>
    </tbody>
</table>
