@props(['header', 'content', 'hasButton'])
@extends('.emails/layouts/app', ['title' => $header])

@section('Content')
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
                                        class="o_bg-ultra_light o_px-md o_py-xl o_xs-py-md o_sans o_text-md o_text-light"
                                        align="left"
                                        style="border-radius: 20px 20px 0px 0px;font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 19px;line-height: 28px;background-color: #ffffff;color: #82899a;padding-left: 24px;padding-right: 24px;padding-top: 34px;padding-bottom: 0px;">

                                    <x-email.header
                                            header="{{ $header }}"
                                    />

                                    <x-email.paragraph
                                            paragraph="{{ $content }}"
                                    />
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

    @if($hasButton)
        <x-email.button
            url="{{ route('login') }}"
            text="{{ __('mail.login') }}"
        />
    @endif
@endsection
