import { convertDateTime, hostWhatsappApi, httpGetRequest } from "./module.js";

const bodyTableMessage = document.getElementById("messages")
const lastUpdateText = document.getElementById("last-update-history")
const totalHistoryText = document.getElementById("total-history-log")


httpGetRequest(`${hostWhatsappApi}/logs`).then((res) => {
    let data = res.data.records

    lastUpdateText.innerHTML = convertDateTime(res.data.last_update)
    totalHistoryText.innerHTML = `${res.data.total_data} Histori Pesan`

    if (data.length > 0) {
        let rows = '';
        data.forEach((val) => {
            let responseJson = JSON.parse(val.response)
            let colorMessage = responseJson.result === "false" ? "danger" : "primary"
            let statusMessage = responseJson.result === "false" ? "Tidak Terkirim" : "Terkirim"
            rows += `<tr>
            <td class="client-avatar"><img alt="image" src="img/profile.jpg"> </td>
            <td><a href="#contact-1" class="client-link">User</a></td>
            <td>${val.application_code}</td>
            <td>${val.provider}</td>
            <td class="contact-type"><i class="fa fa-phone"> </i></td>
            <td> ${val.to}</td>
            <td>${responseJson.message}</td>
            <td class="client-status"><span class="label label-${colorMessage}">${statusMessage}</span></td>
        </tr>`
        });

        bodyTableMessage.innerHTML = rows
    }
})