@props(['email', 'title', 'description', 'pitch'])
@extends('.emails/layouts/app', ['title' =>  __('mail.invitation_request')])

@section('content')
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
                                header="{{ $title }}"
                            />

                            <x-email.paragraph
                                paragraph="{{ $description  }}"
                            />

                            <x-email.paragraph
                                paragraph="{{ __('Pitches.pitch_type', ['type' => $pitch->is_in_person ? 'in-person' : 'online']) }}"
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
@endsection
