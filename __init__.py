#!/usr/bin/env python3
# -*- coding: UTF-8 -*-

# (c)2021 .direwolf <kururinmiracle@outlook.com>
# Licensed under the MIT License.

from os import abort
from flask import Flask, render_template
from flask_pjax import PJAX
from dotenv import load_dotenv
import os
import re

load_dotenv()


def create_app():

    app = Flask(__name__, instance_relative_config=True)
    app.config["PJAX_BASE_TEMPLATE"] = "pjax.html"

    @app.route('/')
    def root():
        return render_template('index.html')

    @app.route('/chart-offset')
    def chart_offset():
        return render_template('chart-offset.html')

    @app.route('/chart-mirror')
    def chart_mirror():
        return render_template('chart-mirror.html')

    @app.route('/chart-align')
    def chart_align():
        return render_template('chart-align.html')

    @app.route('/arc-cutter')
    def arc_cutter():
        return render_template('arc-cutter.html')
    
    @app.route('/arc-rain')
    def arc_rain():
        return render_template('arc-rain.html')

    @app.route('/arc-crease-line')
    def arc_crease_line():
        return render_template('arc-crease-line.html')

    @app.route('/arc-animate')
    def arc_animate():
        return render_template('arc-animate.html')

    @app.route('/arc-splitbytiming')
    def arc_split_by_timing():
        return render_template('arc-splitbytiming.html')
    
    @app.route('/timing-easing')
    def timing_easing():
        return render_template('timing-easing.html')

    @app.route('/timing-glitch')
    def timing_glitch():
        return render_template('timing-glitch.html')

    @app.route('/changelog')
    def changelog():
        return render_template('changelog.html')

    @app.route('/lang/<l>/<n>')
    def lang(l, n):
        matchObj = re.match(r'(.*?)_(.*).properties',n)
        if matchObj:
            n = matchObj.group(1) + ".properties"
            print(n)
        with open(f"lang/{l}/{n}", encoding="utf-8") as f:
            s = f.read()
        return s

    pjax = PJAX()
    pjax.init_app(app)

    return app
