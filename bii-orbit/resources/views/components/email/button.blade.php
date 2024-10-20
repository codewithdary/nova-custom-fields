@props(['url', 'text'])

<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
    <tbody>
        <tr>
           <td
               class="o_bg-light o_px-xs"
               align="left"
               style="background-color: #dbe5ea;padding-left: 8px;padding-right: 8px;">
               <!--[if mso]>
                <Table
                    width="632"
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                    role="presentation">
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
                                                class="o_bg-white o_px-md o_py-xs"
                                                align="left"
                                                style="background-color: #ffffff;padding-left: 24px;padding-right: 24px;padding-top: 20px;padding-bottom: 20px;">

                                                <table align="left" cellspacing="0" cellpadding="0" border="0" role="presentation">
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                class="o_btn o_bg-primary o_br o_heading o_text"
                                                                align="center"
                                                                style="font-family:'Poppins', sans-serif; padding-top: 1rem;padding-bottom: 1rem;padding-left: 1.5rem;padding-right: 1.5rem;border-radius: 0.5rem;font-size: 0.85rem;line-height: 1rem;font-weight: 700;text-align: center;color: #ffffff;background-color:#152e4d;text-transform: none;vertical-align: middle;transition-property: all;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 300ms;user-select: none;box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); ">

                                                                <a
                                                                    class="o_text-white"
                                                                    href="{{ $url }}"
                                                                    style="color: #ffffff;">
                                                                    {{ $text }}
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
               <!--[if mso]></td>
                        </tr>
                    </Table>
            <![endif]--></td>
            </tr>
    </tbody>
</table>
