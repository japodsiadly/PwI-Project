package japodsiadly.pwiProject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class WebController {

    @RequestMapping("/index")
    public String getIndex() {
        return "index";
    }
}
