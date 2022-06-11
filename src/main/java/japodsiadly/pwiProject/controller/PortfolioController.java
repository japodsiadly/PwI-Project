package japodsiadly.pwiProject.controller;

import japodsiadly.pwiProject.logic.MailService;
import japodsiadly.pwiProject.model.Mail;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
class PortfolioController {
    private final MailService mailService;

    @PostMapping("/sendEmail")
    ResponseEntity<?> sendEmail(@RequestBody Mail mail){
        mailService.sendEmail(mail);
        return ResponseEntity.ok().build();
    }
}
